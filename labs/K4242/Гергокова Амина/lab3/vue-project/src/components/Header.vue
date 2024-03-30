<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class="registration container-fluid">
        <div class="container-fluid ">
            <nav class="navbar navbar-dark bg-opacity-50 bg-dark fixed-top z-3">
                <div class="container-fluid bg-opacity-75">
                    <a class="navbar-brand" href="#">Book Library</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark w-25" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome, Username!</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item ">
                                    <a class="nav-link active" href="main">
                                        <svg class="bi bi-book icons">
                                            <use xlink:href="../assets/icons-sprite.svg#icon-open-book" />
                                        </svg>
                                        Book gallery
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person-circle icons">
                                            <use xlink:href="../assets/icons-sprite.svg#icon-profile" />
                                            <use xlink:href="../assets/icons-sprite.svg#icon-profile-2" />
                                        </svg>
                                        Profile
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#settingsModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-gear icons">
                                            <use xlink:href="../assets/icons-sprite.svg#icon-Settings" />
                                            <use xlink:href="../assets/icons-sprite.svg#icon-Settings-2" />
                                        </svg>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="activeId" class="mb-2 mx-auto">
                            <a id="Login" class="btn btn-outline-light me-1" href="login">Login</a>
                            <a id="Register" class="btn btn-outline-light " href="registration">Register</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>

        <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content bg-dark text-bg-dark ">
                    <div class="modal-header ">
                        <h1 class="modal-title fs-5 " id="settingsModalLabel">Settings</h1>
                        <button type="button" class="btn-close text-bg-danger " data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs " role="tablist">
                            <li class="nav-item " role="presentation">
                                <button class="nav-link border-dark-subtle active" id="preferences-tab"
                                    data-bs-toggle="tab" data-bs-target="#preferences-tab-pane" type="button" role="tab"
                                    aria-controls="preferences-tab-pane" aria-selected="true">Preferences</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade mt-1 show active" id="preferences-tab-pane" role="tabpanel"
                                aria-labelledby="preferences-tab" tabindex="0">
                                <label for="lang-selector" class="form-label ">Language:</label>
                                <select class="form-select" id="lang-selector">
                                    <option value="eng" selected>English</option>
                                    <option value="ru">Russian</option>
                                    <option value="fr">French</option>
                                </select>
                                <label for="theme-selector" class="form-label ">Theme:</label>
                                <select class="form-select" id="theme-selector">
                                    <option value="dark" selected>Dark</option>
                                    <option value="light">Light</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import useRegistration from '../composables/useRegistration';

export default {
    setup() {
        const {
            username,
            email,
            password,
            group,
            registerUser,
        } = useRegistration();

        return {
            username,
            email,
            password,
            group,
            registerUser,
        };
    },
};
</script>

<style scoped>
.icons {
    stroke: currentColor;
    fill: currentColor;
    width: 16px;
    height: 16px;
}
</style>