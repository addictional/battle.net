<template>
  <main>
    <main-slider/>
    <game-cards-section />
    <battle-net-section/>
    <career/>
  </main>

</template>

<script>
import BattleNetSection from '../components/main-page/BattleNetSection.vue';
import Career from '../components/Career.vue';
import GameCardsSection from '../components/main-page/GameCardsSection.vue';
import MainSlider from '../components/main-page/MainSlider.vue';



export default {
  components: {GameCardsSection,  BattleNetSection, Career,MainSlider },

  
  // async asyncData() {
  //     const cardsList =  await fetch('http://localhost:3000/json/game-list.json').then(res => res.json());
  //     return {cardsList};
  // },
  
}
</script>




