<template>
  <div class="page__container">
    <Header/>
    <Nuxt/>
    <Footer background="/images/about-page/footer-bg.jpg"/>
    <SvgSymbols class="svg-sprite"/>
  </div>
</template>



// <script>

import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue'

export default {
  components: {Header,Footer}
}
</script>

<style lang="scss" >
@use './assets/styles/main';


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Blizzard";
}
.svg-sprite {
  display: none;
}

</style>