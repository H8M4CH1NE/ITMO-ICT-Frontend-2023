<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid bg-dark fixed-bottom z-2 bg-opacity-50">
        <div class="row">
        <div class="col text-bg-dark text-center ">
          <a class="link-light nav-link " href="#">Contact</a>
        </div>
              <div class="col text-bg-dark text-center ">
                <a class="link-light nav-link " href="#">User agreement</a>
              </div>
              <div class="col text-bg-dark text-center ">
                <a class="link-light nav-link " href="#">About us</a>
              </div>
            </div>
        <div class="row">
            <div class="col text-bg-dark text-center text-bg-dark ">
                © 2024 - BookLibrary. All Rights Reserved.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
};
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>