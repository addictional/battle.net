<i18n>
{
  "en-us": {
    "nav": ["games","shop","news","esports"],
    "profile": ["Support","My Account"]
  },
  "ru-ru": {
    "nav": ["игры","магазин","новости","киберспорт"],
    "profile": ["Поддержка","Моя учетная запись"]
  }
}
</i18n>

<template>
    <header class="header">
        <nav class="navbar" >
            <nuxt-link :to="localePath('/')" class="navbar__root-link" >
            <icon id="logo" fill="#009ae4" class="navbar__root-link__icon"  />
            </nuxt-link>
            <nav class="navbar-items"> 
                <nuxt-link :to="localePath('/about')"  class="navbar-items__link">{{$t('nav.0')}}</nuxt-link>
                <a href="/" class="navbar-items__link">{{$t('nav.1')}}</a>
                <a href="/" class="navbar-items__link">{{$t('nav.2')}}</a>
                <a href="/" class="navbar-items__link">{{$t('nav.3')}}</a>
            </nav>
            <nav class="navbar-profile-items">
                <a href="" class="navbar-profile-items__link">{{$t('profile.0')}}</a>
                <a href="" class="navbar-profile-items__link">{{$t('profile.1')}}</a>
            </nav>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
$linkColor: rgba(255,255,255,0.7);
$linkHoverColor: rgba(255,255,255,1);

.header {
    width: 100%;
    background-color: #0b0d12;
    position: relative;
    &::after {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: solid 1px rgba(255,255,255,0.15);
        pointer-events: none;
    }
}
.navbar {
    text-align: left;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    height: 60px;
    padding: 0 40px;
    vertical-align: baseline;
    position: relative;
    a {
        color: $linkColor;
        &:hover, &:focus {
            color: $linkHoverColor
        }
    }

    &__root-link {
        display: inline-block;
        height: 60px;
        width: 75.06719px;
        position: relative;
        margin-right: 30px;
        &__icon {
            width: 75.06719px;
            height: 34px;
            position: absolute;
            top: 50%;
            transform: translate(0,-50%);
            pointer-events: none;
        }
    }
    &-items {
        display: inline-block;
        vertical-align: top;
        & > :last-child {
            margin-right: 0;
        }

        &__link {
            transition: color 200ms,background-color 200ms,border-color 200ms;
            font-size: 20px;
            text-transform: uppercase;
            line-height: 60px;
            height: 60px;
            display: inline-block;
            margin-right: 30px;
    
        }    
    }

    &-profile-items {
        position: absolute;
        display: inline-block;
        right: 40px;

        & > :last-child {
            margin-right: 0;
        }

        &__link {
            margin-right: 30px;
            display: inline-block;
            line-height: 60px;
            height: 60px;
            font-size: 17px;
        }
    }
    
}

</style>