<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container pt-5">
        <div class="container text-center mt-5 mb-5 z-2">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <!-- <img src="../assets/icons-user.png"
                                            class="rounded" width="200" height="200"> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor"
                                        class="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                    <div class="mt-3">
                                        <h4>{{ username }}</h4>
                                        <!-- <input type='file' id="file"  class="input__file"
                                            accept="image/*">
                                        <label for="file" class="btn btn-outline-primary mx-2 ">Change photo</label> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Username</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {{ username }}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> Email </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {{ email }}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Group</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {{ group }}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <button class="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#profileEditModal">
                                            Change info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>
import useRegistration from '../composables/useRegistration';

export default {
    setup() {
        const {
            email,
            password,
            confirmPassword,
            agreed,
            registerUser,
        } = useRegistration();

        return {
            email,
            password,
            confirmPassword,
            agreed,
            registerUser,
        };
    },
};
</script>

<style scoped></style>