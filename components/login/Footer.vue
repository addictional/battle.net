<i18n>
{
  "en-us": {
    "nav": ["Battle.net EULA","Privacy","Terms","Copyright Infringement","Cookies"]
  },
  "ru-ru": {
      "nav": ["вакансии","о компании","поддержка","открыть запрос","пресс-релиз"]
  }
}
</i18n>

<template>
    <footer class="login-footer">
        <nav class="login-footer__nav footer-nav footer-nav--sublinks">
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.0')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.1')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.2')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.3')}}</nuxt-link>
            <nuxt-link :to="localePath('/about')"  class="footer-nav__item">{{$t('nav.4')}}</nuxt-link>
        </nav>
        <span class="login-footer__copyright">©2021 Blizzard Entertainment, Inc. All rights reserved.</span>
    </footer>
</template>


<style lang="scss" scoped>
.login-footer {
    padding-bottom: 24px;
    margin: 0 auto;
    padding: 0 8px 34px 8px;
    box-sizing: border-box;
    

    &__nav {
        font-feature-settings: "kern" 1,"liga" 1;
    }

    &__copyright {
        display: block;
        color: rgba(255, 255, 255, 0.3);
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0;
        text-transform: uppercase;
        text-align: center;
        padding: 8px 0;
    }
}
</style>