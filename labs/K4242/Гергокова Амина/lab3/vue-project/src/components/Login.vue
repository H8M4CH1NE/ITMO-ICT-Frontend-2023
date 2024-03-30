<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class="pt-3">
        <div class="container-fluid">
            <div class="container mt-5 w-50">
                <div class="row bg-black text-white bg-opacity-50 justify-content-center pt-5  border border-3 border-black rounded">
                    <div class="col-md-8">
                        <h2 class="text-center">Login</h2>
                        <form onsubmit="login(event)">
                            <div class="form-group">
                                <label for="email">Username:</label>
                                <input autocomplete="off" v-model="username" type="username" class="form-control"
                                    id="username" name="username" placeholder="Enter username" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input autocomplete="off" v-model="password" type="password" class="form-control"
                                    id="password" name="password" placeholder="Enter password" required>
                            </div>
                            <div class="d-grid gap-2 col-4 mx-auto">
                                <button type="submit" id="login"
                                    class="btn btn-outline-dark border-black border-2 mt-3 text-white">Login</button>
                            </div>
                        </form>
                        <p class="mt-3 text-center">Don't have an account? <a class="text-reset fw-bold"
                                href="register">Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import useLogin from "@/composables/useLogin";

export default {
    setup() {
        const { username, password, loginError, loginUser } = useLogin();

        return {
            username,
            password,
            loginError,
            loginUser,
        };
    },
};
</script>

<style scoped></style>