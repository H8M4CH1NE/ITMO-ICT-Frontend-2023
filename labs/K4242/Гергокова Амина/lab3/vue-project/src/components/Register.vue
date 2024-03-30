<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class="pt-3">
        <div class="container-fluid ">
            <div class="container mt-5 w-50">
                <div class="row bg-black text-white bg-opacity-50 justify-content-center pt-5  border border-3 border-black rounded ">
                    <div class="col-md-8">
                        <h2 class="text-center">Register</h2>
                        <form>
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" class="form-control" id="username" placeholder="Enter username"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password"
                                    required>
                            </div>
                            <div class="d-grid gap-2 col-4 mx-auto">
                                <button type="submit" onclick="location.href='../html/index.html'"
                                    class="btn btn-outline-dark border-black border-2 mt-3 text-white">Register</button>
                            </div>
                        </form>
                        <p class="mt-3 text-center">Already have an account? <a class="text-reset fw-bold"
                                href="login">Login</a></p>
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
            registerUser,
        } = useRegistration();

        return {
            username,
            email,
            password,
            registerUser,
        };
    },
};
</script>

<style scoped>
</style>