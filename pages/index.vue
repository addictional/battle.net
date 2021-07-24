<template>
  <section class="games-section">
    <div class="games-list">
      <div v-for="item in cardsList" :key="item.image" class="games-list__card"><a href="/"><div class="games-list__card__view" :style="{backgroundImage: `url(${item.image})`}"></div></a></div>
      <!-- <img v-for="item in cardsList" :key="item.image" :src="item.image"/> -->
    </div>
  </section>


</template>

<script>



export default {
  async asyncData() {
      const cardsList =  await fetch('http://localhost:3000/json/game-list.json').then(res => res.json());
      return {cardsList};
    }
  
}
</script>

<style lang="scss" scoped>
.games-section {
  background-image: url(/images/background.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255,255,255,.1);
  padding:  100px 0;
}

.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  &__card {
    width: 210px;
    height: 280px;
    @media (min-width: 1600px) {
      width: 240px;
      height: 320px;
    }
    margin: 12px;
    position: relative;
    & > a {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-position: bottom center;
      background-size: cover;
      box-shadow: 0 8px 16px rgb(0 0 0 / 10%);
      transition: filter 200ms,transform 200ms,-webkit-filter 200ms;
      transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      transform: rotate(0.01deg);
      &:hover {
        transition: cubic-bezier(0.16, 1, 0.3, 1);
        transition-duration: 100ms;
        -webkit-filter: brightness(115%) contrast(90%);
        filter: brightness(115%) contrast(90%);
        transform: scale(1.05);
      }
    }
    &__view {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-position: bottom center;
        background-size: cover;
        box-shadow: 0 8px 16px rgb(0 0 0 / 10%);
        transition: filter 200ms,transform 200ms,-webkit-filter 200ms;
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        transform: rotate(0.01deg);
      }
  }
  & > img {
    width: 210px;
    height: 280px;
  }
}
</style>


