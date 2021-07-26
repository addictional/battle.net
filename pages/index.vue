<template>
  <main>
    <client-only>
        <main-slider/>
    </client-only>
    <game-cards-section />
    <battle-net-section/>
    <career/>
  </main>

</template>

<script>
import BattleNetSection from '../components/BattleNetSection.vue';
import Career from '../components/Career.vue';
import GameCardsSection from '../components/GameCardsSection.vue';
import MainSlider from '../components/MainSlider.vue';



export default {
  components: {GameCardsSection,  BattleNetSection, Career,MainSlider },

  
  // async asyncData() {
  //     const cardsList =  await fetch('http://localhost:3000/json/game-list.json').then(res => res.json());
  //     return {cardsList};
  // },
  
}
</script>




