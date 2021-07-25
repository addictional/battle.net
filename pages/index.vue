<template>
  <main>
    <main-slider/>
    <game-cards-section :items="items"/>
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
  data() {
    return {
      items: [
        {
            "image" : "/images/diablo2.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/overwatch2.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/overwatch.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/world-of-warcraft.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/hearthstone.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/hots.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/warcraft3-reforged.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/diablo4.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/diablo-immortal.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/diablo3.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/starcraft2.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/starcraft-remastered.jpeg",
            "name": "diablo 2"
        },
        {
            "image" : "/images/rtro-game.jpeg",
            "name": "diablo 2"
        }
      ]
    }
  }
  
  // async asyncData() {
  //     const cardsList =  await fetch('http://localhost:3000/json/game-list.json').then(res => res.json());
  //     return {cardsList};
  // },
  
}
</script>




