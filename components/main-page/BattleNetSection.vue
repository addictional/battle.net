<i18n>
{
  "en-us": {
    "title" : "Download Battle.net",
    "benefits": ["Your games in one place","Connect with friends","Shop for digital games and goodies"],
    "download": "Download for Windows",
    "learnMore": "Learn more",
    "alsoAvailable": {"text": "Also available as a","link": "mobile app"}
  },
  "ru-ru": {
    "title" : "Загрузка Battle.net",
    "benefits": ["Все ваши игры в одном месте","Общайтесь с друзьями","Приобретайте электронные версии игр и другие товары"],
    "download": "Загрузить для Windows",
    "learnMore": "Подробнее",
    "alsoAvailable": {"text": "Также доступно как","link": "мобильное приложение"}
  }
}
</i18n>

<template>
    <section class="battle-net-section">
        <div class="content">
            <div class="info">
                <h1 class="info__title">{{$t('title')}}</h1>
                <div class="info__benefit">
                    <svg-icon name="bn-section/squar" class="info__benefit__icon"/>
                    <span class="info__benefit__text">{{$t('benefits.0')}}e</span>
                </div>
                <div class="info__benefit">
                    <svg-icon name="bn-section/peoples" class="info__benefit__icon"/>
                    <span class="info__benefit__text">{{$t('benefits.1')}}</span>
                </div>
                <div class="info__benefit">
                    <svg-icon name="bn-section/gift" class="info__benefit__icon"/>
                    <span class="info__benefit__text">{{$t('benefits.2')}}</span>
                </div>
                <a class="info__download button">{{$t('download')}}<div class="info__download__icon"><svg-icon name="windows-icon"/></div></a>
                <a href="" class="info__learn-more button button--outlined">{{$t('learnMore')}}</a>
                <p class="info__paragraph">{{$t('alsoAvailable.text')}} <a class="markup-link" href="/s/s">{{$t('alsoAvailable.link')}}</a></p>
            </div>
            <icon id="battle-net-tag" class="content__tag"/>
            <img :src="`/images/battle-net-section/${currentLocale}/app.jpeg`" alt="" class="content__app-image">
        </div>
    </section>    
</template>

<script>
export default {
    computed: {
        availableLocales(){
            return this.$i18n.locales;
        },
        currentLocale() {
            return this.$i18n.locale;
        }
        
    }
}
</script>

<style lang="scss" scoped>
.battle-net-section {
    background-image: url("/images/battle-net-section/background.jpeg");
    overflow: auto;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover ;
    position: relative;
    border-top: 1px solid #1e4f81;
    border-bottom: 1px solid #1e4f81;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding: 56px;
        margin: 0 auto;
        max-width: 1600px;

        .info {
            &__title {
                font-size: 2.75rem;
                font-weight: 500;
                line-height: 1.5;
                color: #fff;
            }
            &__benefit {
                display: flex;
                align-items: center;
                margin: 8px 0;
                font-size: .9rem;
                &__icon {
                    width: 21.59px;
                    height: 21.59px;
                    margin-right: 12px;
                    color: rgb(0, 153, 255);
                    fill: rgb(0, 153, 255);
                    stroke: rgb(0, 153, 255);
                    
                }
                &__text {
                    color: rgba(255,255,255,.8);
                    font-size: 1.5rem;
                    font-weight: 400;
                    line-height: 1.5;
                }
            }
            &__download {
                margin-top: 16px;
                &__icon {
                    display: inline-block;
                    position: relative;
                    width: 32.4px;
                    height: 20px;
                    vertical-align: middle;
                    & > svg {
                        bottom: 0;
                        left: 0;
                        transform: translate(0,3px);
                        position: absolute;
                        fill: #fff;
                        width: 32.4px;
                        height: 32.4px;
                    }
                }
            }

            &__learn-more {
                display: inline-block;
                margin-left: 16px;
            }

            &__paragraph {
                font-family: "Open Sans",Helvetica,Arial,sans-serif;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #fff;
                color: rgba(255,255,255,.8);
                margin-top: 24px;
            }
        }
        

        &__tag {
            position: absolute;
            top: 50%;
            right: 380px;
            transform: translate(-50%, -50%);
            color: #148eff;
            font-size: 13rem;
            opacity: .3;
            fill: currentColor;
            pointer-events: none;
            height: 1.5em;
            width: 1.5em;
            fill: #148eff;
        }

        &__app-image {
            height: 332px;
            z-index: 1;
        }

    }
}
</style>