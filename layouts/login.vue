<template>
    <div class="page__container">
    <nuxt/>
    <Footer/>
    <svg-symbols class="svg-sprite"/>
    </div >
</template>

<script>
import Footer from '../components/login/Footer.vue'

export default {
    components: {Footer}    
}
</script>

<style lang="scss"  scoped>
@use './assets/styles/variables' as a;

.page__container {
    background: a.$grayBackground;
}
.svg-sprite {
  display: none;
}





</style>
