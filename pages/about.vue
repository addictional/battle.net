<i18n>
{
  "en-us": {
    "title" : "WELCOME TO BLIZZARD",
    "description": {
      "text": [
        "At Blizzard Entertainment, we pour our hearts and souls into everything we create. We embrace our core values every day so that we can continue creating epic entertainment experiences for all our players. It doesn’t matter who you are or where you’re located—if you’re a member of our evolving and vibrant community, working with us at one of our offices around the globe, or taking a piece of Blizzard with you ",
        " —you’re welcome here."
      ],
      "link": "into space"
    }
  },
  "ru-ru": {
    "title" : "ДОБРО ПОЖАЛОВАТЬ В BLIZZARD",
    "description": {
      "text": [
        "Сотрудники Blizzard Entertainment подходят к разработке игр с душой и вкладывают частичку самих себя в каждый проект. Мы неотступно следуем нашим основным ценностям и продолжаем радовать нашу аудиторию потрясающими развлекательными продуктами. Неважно, кто вы и где живете, являетесь ли членом нашего растущего и разнообразного сообщества, работаете ли в одном из наших офисов по всему миру или берете с собой сувенир Blizzard ",
        ", — мы всегда вам рады."
      ],
      "link": "в космос"
    }
  }
}
</i18n>

<template>
  <main>
    <section class="header-section">
      <div style="height: 1px"></div>
      <h1 class="title">{{$t('title')}}</h1>
      <p class="description">{{$t('description.text.0')}}<a class="markup-link" href="https://news.blizzard.com/starcraft/21047785/">{{$t('description.link')}}</a>{{$t('description.text.1')}}</p>
    </section>
    <section class="video-section">
      <img src="/images/about-page/character-overlay-left.png" alt="" class="left-image">
      <img src="/images/about-page/character-overlay-right.png" alt="" class="right-image">
      <iframe width="1104" height="632" src="https://www.youtube.com/embed/mG-tQbAdujY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  </main>
</template>

<script>



export default {
  components: {
    
  },
  layout: 'about'
}
</script>

<style lang="scss" scoped >

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-8px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .header-section {
    background-image: url("/images/about-page/header.webp?auto=webp&format=pjpg");
    background-repeat: no-repeat;
    background-position: center top;
    text-align: center;
    color: #fff;

    .title {
      font-size: 4.25rem;
      font-weight: 700;
      line-height: 1.2;
      margin-top: 339px;        
      text-transform: uppercase;
      position: relative;
      &::after {
        width: 344px;
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -8px;
        height: 4px;
        width: 190px;
        background: #00aeff;
      }
    }

    .description {
      font-family: "Open Sans",Helvetica,Arial,sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      margin: 24px auto 64px;
      margin-top: 32px;
      max-width: 1000px;
    }
  }

  .video-section {
    position: relative;
    margin: auto;
    border: 1px solid #00aeff;
    margin-bottom: 80px;
    padding: 12px;
    width: 1104px;

    & > img {
      z-index: 1;
      pointer-events: none;
      display: none;
      position: absolute;
      display: block;
    }

    .left-image {

      top: 15px;
      left: -290px;
    }

    .right-image {
      top: 0;
      right: -300px;
      -webkit-animation: float 6s ease-in-out infinite;
      animation: float 6s ease-in-out infinite;
    }
  }

</style>