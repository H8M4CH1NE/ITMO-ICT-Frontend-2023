<!-- eslint-disable vue/no-reserved-component-names -->
<template>
    <div class="section">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Header,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer,
    },
};

// const body = document.querySelector('body')
// const bgImgSrc = 'C:/Users/Public/Frontend-Vue/vue-project/src/assets/small-bouquet-on-opened-notebook.jpg'
// body.style.background = 'url(' + bgImgSrc + ')'
</script>

<style>
.section {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-left: -32px;
    min-height: 100vh;
    width: 250vh;
    background: url('../assets/small-bouquet-on-opened-notebook.jpg')no-repeat;
    background-position: center;
    background-size: cover;

}
</style>