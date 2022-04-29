<template>
  <div class="page__container">
    <Header/>
    <Nuxt/>
    <Footer class-name="about-footer" background="/images/about-page/footer-bg.jpg"/>
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

<style lang="scss"  >
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

.about-footer {
    background-image: url(/images/about-page/footer-bg.jpg);
    background-position: top;
    padding-top: 84px;
    margin-top: 0;
    border-top: 1px solid rgba(255,255,255,0.1);
}

</style>