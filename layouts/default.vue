<template>
  <div class="page__container">
    <Header/>
    <main class="page__content">
      <Nuxt/>
    </main>
    <Footer/>
    
  </div>
</template>



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
body {
  margin: 0;
  font-family: "Blizzard";
  background-color: #002650;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>