<i18n>
{
  "en-us": {
    "title" : "404 - PAGE NOT FOUND",
    "subtitle": "We've dispatched a rescue murloc to guide you back to safety.",
    "goBack": "Mmmrrgmgrrrgmmll!"
  },
  "ru-ru": {
    "title" : "404 - СТРАНИЦА НЕ НАЙДЕНА",
    "subtitle": "Мы выслали за вами спасательный отряд мурлоков, они отведут вас в безопасное место.",
    "goBack": "Мргрмлмлрлрглмрргл!"
  }
}
</i18n>

<template>
    <main class="error-container">
        <div class="error-video">
            <video  autoplay="autoplay" loop="loop" muted="muted" preload="preload" webkit-playsinline="true" tabindex="-1">
                <source src="/videos/murlock.webm" type="video/webm">
                <source src="/videos/murlock.mp4" type="video/mp4">
            </video>
        </div>
        <div class="error-content">
            <h1 class="error-content__title">
                {{$t('title')}}
            </h1>
            <p class="error-content__subtitle">
                {{$t('subtitle')}}
            </p>
            <a href="/" class="error-content__button button">{{$t('goBack')}}</a>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .error-container {
        position: relative;
        height: 800px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        .error-video {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 1920px;
            box-sizing: border-box;
            bottom: 60px;
            z-index: -1;
        }
        .error-content {
            align-self: flex-end;
            color: #002650;
            margin-bottom: 250px;
            text-align: center;
            &__title {
                font-size: 43.938px;
                font-weight: 700;
                text-transform: uppercase;
                text-align: center;
            }
            &__subtitle {
                font-size: 18px;
                font-weight: 400;
                line-height: 1.7;
                font-family: "Open Sans",Helvetica,Arial,sans-serif;
            }
            &__button {
                display: inline-block;
                margin-top: 40px;
            }
        }
    }
</style>