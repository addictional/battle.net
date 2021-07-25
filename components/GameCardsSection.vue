<i18n>
{
  "en-us": {
    "title" : "Games",
    "link" : "Shop All Games"
  },
  "ru-ru": {
    "title" : "Игры",
    "link" : "Все игры"
  }
}
</i18n>

<template>
  <section class="games-section">
    <div class="games-section__container">
        <div class="games-header">
            <h2 class="games-header__title">{{$t('title')}}</h2>
            <a href="/sdf/" class="games-header__link">{{$t('link')}}</a>
        </div>
        <div class="games-list">
            <div v-for="item in items" :key="item.image" class="games-list__card"><a href="/"><div class="games-list__card__view" :style="{backgroundImage: `url(${item.image})`}"></div></a></div>
        </div>
    </div>
  </section>
</template>

<script>



export default {
    props: {
        items: {
            type: Array,
            default: () => [],
            required: true,
        }
    }

}
</script>

<style lang="scss" scoped>
.games-section {
  background-image: url(/images/background.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255,255,255,.1);
  padding:  16px 0;
  &__container {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    .games-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin: 0 12px;
        &__title {
            font-size: 2.75rem;
            font-weight: 500;
            line-height: 1.5;
            color: #fff;
            text-align: left;
        }
        &__link {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #00aeff;
            transition: color 200ms;
            text-decoration: none;
            &:hover,&:focus {
                color: #fff;
            }
        }
    }
  }
}



.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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


