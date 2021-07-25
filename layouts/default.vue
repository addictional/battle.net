<template>
  <div class="page__container">
    <Header/>
    <Nuxt/>
    <Footer/>
    
  </div>
</template>



// <script>

// import IntersectionObserverService from '../services/IntersectionObserver';

// export default {
//   provide: {intersectionObserver: new IntersectionObserverService()}
// }
// </script>

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