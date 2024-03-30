/* eslint-disable @typescript-eslint/no-unsafe-argument */
import UserAPI, { ProfileInfo } from '@/_api/user'
import { getRole } from '@/_models'
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { Component, OnInit, TemplateRef } from '@angular/core'
import { AuthenticationService } from '@/_services'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info = ''
  fio = ''
  phone = ''
  room = ''
  role = ''
  division = ''
  sign: unknown
  img: unknown
  roleId = 0

  signTitle = 'Необходимо добавить'
  // надпись есть или нет подписи
  signClass = 'border-secondary text-secondary'
  // if true -> border-secondary text-secondary
  // else -> text-danger border-danger
  signClassIcon = 'bi-patch-check-fill text-success'// else bi-patch-exclamation-fill text-danger

  profileForm: FormGroup = new FormGroup({
    fio: new FormControl(''),
    phone: new FormControl(''),
    room: new FormControl('')
  })

  submitted = false

  url!: unknown

  modalRef!: BsModalRef
  toUploadAva!: unknown
  toUploadImg!: unknown
  data: any
  config = {
    animated: false
  }

  constructor (
    private readonly formBuilder: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly modalService: BsModalService
  ) {
    this.data = JSON.parse(localStorage.getItem('user-info')!)
    this.roleId = getRole(this.data.role).id
    this.authenticationService.subscribeBehaviorUser().subscribe(data => {
      this.url = data.img
    })
  }

  async renderUserInfo (): Promise<void> {
    // let data = localStorage.getItem('user-info');

    // #1452 - Cannot add or update a child row: a foreign key constraint fails (`jwt_base`.`users`, CONSTRAINT `users_ibfk_1` FOREIGN KEY (`sign_id`) REFERENCES `sign_list` (`sign_id`))

    if (this.data !== 0) {
      this.profileForm = this.formBuilder.group({
        // username: this.data,
        fio: [this.fio, Validators.required],
        phone: [this.phone, Validators.required],
        room: [this.room, Validators.required]
      })
      this.fio = this.authenticationService.getUserInfo.fio
      this.phone = this.authenticationService.getUserInfo.phone
      this.room = this.authenticationService.getUserInfo.room
      this.sign = this.authenticationService.getUserInfo.sign
      this.division = this.authenticationService.getUserInfo.division
      console.log('division', this.division, typeof this.division)
      this.role = getRole(this.data.role).name
      this.url = this.authenticationService.getUserInfo.img
      if (this.sign == null || (''.length > 0)) {
        this.signTitle = 'Необходимо добавить'
        this.signClass = 'text-danger border-danger'
        this.signClassIcon = 'bi-patch-exclamation-fill text-danger'
      } else {
        this.signTitle = 'Добавлена'
        this.signClass = 'border-secondary text-secondary'
        this.signClassIcon = 'bi-patch-check-fill text-success'
      }
    }
  }

  ngOnInit (): void {
    void this.renderUserInfo()
    this.authenticationService.subscribeBehaviorUser().subscribe(() => {
      void this.renderUserInfo()
    })
  }

  /// FIX info string
  infoNewUser (): boolean {
    if (this.data !== 0) {
      if (this.room == null && this.phone === '' && this.fio == null) {
        this.info = 'Заполните пожалуйста информацию в профиле и подождите, пока администратор выдаст вам роль.'
        return true
      } else if (this.roleId === 0) {
        this.info = 'Пожалуйста дождитесь, когда администратор одобрит вашу (регистрацию).'
        return true
      }
      return false
    }
    return false
  }

  async saveUserInfo (): Promise<void> {
    this.submitted = true
    const objReq: ProfileInfo | number = this.profileForm.getRawValue()
    console.log('objReq', objReq)
    this.authenticationService.setPcid = objReq as number
    await UserAPI.updateUser(objReq)
    void this.renderUserInfo()
    this.profileForm.reset()
    this.modalRef.hide()
  }

  editProfile (template: TemplateRef<unknown>): void {
    this.modalRef = this.modalService.show(template)
  }

  closeModal (): void {
    this.profileForm.reset()
    this.modalRef.hide()
  }

  edit (): void {
    const initialState: ModalOptions = {
      animated: false,
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    }
    this.modalRef = this.modalService.show(ModalContentComponent, initialState)
    // this.modalRef = this.modalService.show(config: animated=false);
    this.modalRef.content.title = 'Modal with component' as unknown
    // this.modalRef.content.list = list;
    // setTimeout(() => {
    //   list.push('PROFIT!!!');
    // }, 2000);
  }

  async changePhoto (event: any): Promise<void> {
    if ((Boolean(event.target.files)) && (Boolean(event.target.files.length))) {
      const reader = new FileReader()
      const [file] = event.target.files
      reader.readAsDataURL(file)
      reader.onload = async (event) => {
        this.toUploadAva = reader.result as string
        this.url = reader.result?.toString().replace(/^data:image\/[a-z]+;base64,/, '') as string
        if (this.toUploadAva !== null) {
          await UserAPI.saveImg({ img: this.toUploadAva })
        }
      }
    }
  }

  async changeImg (event: any, x: any, mark: any): Promise<void> {
    if ((Boolean(event.target.files)) && (Boolean(event.target.files.length))) {
      const reader = new FileReader()
      const [file] = event.target.files
      reader.readAsDataURL(file as Blob)
      reader.onload = async (event) => {
        this.toUploadImg = reader.result as string
        x = reader.result?.toString().replace(/^data:image\/[a-z]+;base64,/, '') as string
        if (this.toUploadImg !== null) {
          await UserAPI.saveImg({ img: this.toUploadImg, mark })
        }
      }
    }
  }

  changeSign (event: unknown): void {
    const mark = true
    void this.changeImg(event, this.sign, mark)
  }
}

@Component({
  selector: 'modal-content',
  styles: [
    '#modal {margin: 0 auto;top: 50%;transform: translate(0,-50%);-o-transform: translate(0,-50%);-webkit-transform: translate(0,-50%);}'
  ],
  template: `

  `
})
export class ModalContentComponent implements OnInit {
  public title!: string
  public list: unknown[] = []
  constructor (public bsModalRef: BsModalRef) { }

  ngOnInit (): void {
    /* empty */
  }
}
