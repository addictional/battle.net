<i18n>
{
  "en-us": {
    "nav": ["Careers","About","Support","Contact Us","press","api","site map"],
    "sublinks": ["privacy","legal","terms","cookie policy","cookie setting"],
    "trademarks": {"before": "","link": "","after": ""}
  },
  "ru-ru": {
      "nav": ["вакансии","о компании","поддержка","открыть запрос","пресс-релиз","api","карта сайта"],
      "sublinks": ["Политика конфиденциальности","Соглашения","Условия","Политика cookie","Параметры cookie"],
      "trademarks": {"before": "","link": "","after": ""}
  }
}
</i18n>

<template>
    <footer :class="`footer${className ? ' ' + className : ''}`" >
        <div v-if="visible"  class="overlay" @click="visible = !visible"/>
        <div class="footer-selector">
            <div v-if="visible" class="selector-dropdown">
                <div class="dropdown-container">
                    <div class="locales">
                        <div class="locales__section">
                            <nuxt-link v-for="locale in availableLocales" :key="locale.code" class="locales__section__item" :to="switchLocalePath(locale.code)" @click.native="visible = !visible">{{locale.name}}</nuxt-link>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="selector-toggle" @click="visible = !visible">
                <div class="selector-toggle__icon"><icon id="globus"  /></div>
                <label class="selector-toggle__label">{{currentLocale}}</label>
                <div class="selector-toggle__arrows"><icon id="arrows"/></div>
            </div>
        </div>
        <div class="footer-logo">
            <nuxt-link :to="localePath('/')">
            <icon id="logo2"/>
            <icon id="entertainment"/>
             </nuxt-link>
        </div>

        <nav class="footer-nav">
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.0')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.1')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.2')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.3')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.4')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.5')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.6')}}</nuxt-link>
        </nav>
        <div class="footer-download-text">
            <span>All games, one app:</span>
            <a class="footer-download-text__link"> <icon id="battle-net-tag"/> Battle.net Desktop App</a>
        </div>
        <div class="footer-copyright">©2021 Blizzard Entertainment, Inc. All rights reserved.</div>
        <div class="footer-trademark">All <a href="https://www.blizzard.com/legal/b04001c4-dc81-480d-a475-5e276e241e4f/">trademarks</a> referenced herein are the properties of their respective owners.</div>
        <nav class="footer-nav footer-nav--sublinks">
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('sublinks.0')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('sublinks.1')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('sublinks.2')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('sublinks.3')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('sublinks.4')}}</nuxt-link>
        </nav>
    </footer>
    
</template>
<script>
// import  { String } from 'vue'; 
export default {
    props: {
        className: {
            type: String,
            required: false,
            default: undefined,
        }
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        availableLocales(){
            return this.$i18n.locales;
        },
        currentLocale() {
            return this.$i18n.localeProperties.name;
        }
        
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    min-height: 520px;
    margin-top: 20px;
    font-family: "Open Sans",Helvetica,Arial,sans-serif;

    &-logo {
        display: block;
        position: relative;
        margin: 30px 0;
        height: 66px;
        & > a {
            display: block;
            width: 124px;
            height: 66px;
            margin: 0 auto;
            position: relative;
            & > * {
                width: 124px;
                height: 66px;
            }
            & > :first-child {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                fill: #00aeff;
                pointer-events: none;
                transition: color 200ms,background-color 200ms;
            }
            & > :last-child {
                fill: #fff;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                pointer-events: none;
                transition: color 200ms,background-color 200ms;
            }
        }
    }



    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }

    &-selector {
        position :relative;
        text-align: center;
        color: #fff;
        z-index: 3;
        .selector-dropdown {
            position: absolute;
            top: auto;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            display: block;
            z-index: 9999;
            max-width: 440px;
            width: 100%;
            padding: 0 20px 5px;
            overflow-y: visible;
            background: transparent;
            .dropdown-container {
                position: relative;
                min-height: 100%;
                background: linear-gradient(to bottom, #283244 0%, rgba(21,26,35,0.95) 100%);
                box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%);
                height: auto;
                min-height: 100%;
                &::after {
                    content: ' ';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border: solid 1px rgba(255,255,255,0.15);
                    pointer-events: none;
                }
                .locales {
                    padding: 10px 30px 15px;
                    position: relative;
                    box-sizing: border-box;
                    white-space: nowrap;
                    text-align: left;
                    &__section {
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 3px;
                        width: 50%;
                   
                        &__item {
                            display: block;
                            position: relative;
                            font-family: "Blizzard",Helvetica,Arial,sans-serif;
                            font-size: 15px;
                            line-height: 1.5;
                            color: rgba(255,255,255,0.5);
                            text-decoration: none;
                            transition: color 200ms,background-color 200ms;
                            cursor: pointer;
                            padding: 3px 0;
                            &:hover, &.nuxt-link-exact-active {
                                color: rgba(255,255,255);
                            }
                        }
                    }

                }
            }

        }
        .selector-toggle {
            display: inline-block;
            vertical-align: baseline;
            cursor: pointer;
            &__icon {
                vertical-align: middle;
                width: 24px;
                height: 24px;
                color: #00aeff;
                display: inline-block;
                margin-right: 5px;
                & > svg {
                    width: 24px;
                    height: 24px;
                    fill: currentColor;
                }
            }
            &__label {
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                    margin: 0 auto;
                    font-weight: 400;
                    line-height: 24px;
                    height: 24px;
                    color: rgba(255,255,255,0.7);
                    transition: color 200ms,background-color 200ms;
            }
            &__arrows {
                vertical-align: middle;
                margin-left: 2px;
                width: 16px;
                height: 16px;
                color: rgba(255,255,255,0.5);
                transition: color 200ms,background-color 200ms;
                display: inline-block;
                position: relative;
                & > svg {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    fill: currentColor;
                    pointer-events: none;
                }
            }
        }

        

    }

    &-download-text {
        font-family: "Open Sans",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        color: rgba(255,255,255,0.7);
        text-align: center;
        margin: 40px 0;

        &__link {
            color: #00aeff;
            cursor: pointer;
            &:hover, &:focus {
                color: #00c6ff;
            }

            & > svg {
                height: 15.99px;
                width: 16.56px;
                fill:currentColor;
                transform: translateY(2px);
            }
        }

    }

    &-copyright, &-trademark {
        font-family: "Blizzard",Helvetica,Arial,sans-serif;
        font-size: 13px;
        line-height: 1.4;
        color: rgba(255,255,255,0.5);
        margin: 0;
        text-align: center;
    }
    &-copyright {
        text-transform: uppercase;
    }
    &-trademark > a {
        font-weight: bold;
        text-decoration: none;
        transition: color .2s;
        color: rgba(255,255,255,0.7);

        &:hover {
            color: #fff;
        }
    }
}
</style>