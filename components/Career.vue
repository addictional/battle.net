<i18n>
{
  "en-us": {
    "title" : "Create worlds",
    "subtitle": "Learn more about Careers at Blizzard",
    "button": "Explore Careers"
  },
  "ru-ru": {
    "title" : "Создавайте новые миры",
    "subtitle": "Узнайте больше о работе в Blizzard",
    "button": "Список вакансий"
  }
}
</i18n>
<template>
    <section class="career">
        <div class="slideshow">
            
            <transition name="slide--fade">
            <div v-for="item in activeSlides" :key="item.image"  class="slide" :style="{backgroundColor: item.background}">
                <div :style="{backgroundImage: `url(${item.image})`}" class="slide__image"/>  
            </div>
            </transition>
           
        </div>
        <div class="description">
            <h1 class="description__title">{{$t('title')}}</h1>
            <h2 class="description__subtitle">{{$t('subtitle')}}</h2>
            <nuxt-link class="description__button button" :to="localePath('/career')">{{$t('button')}}</nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            intervalId: null,
            timeoutId: null,
            observer: null,
            list: [
                {image: '/images/career/careers-1.jpeg',background: 'rgb(27, 23, 15'},
                {image: '/images/career/careers-2.jpeg',background: 'rgb(27, 23, 15'},
                {image: '/images/career/careers-3.jpeg',background: 'rgb(27, 23, 15'},
                {image: '/images/career/careers-4.jpeg',background: 'rgb(27, 23, 15'},
                {image: '/images/career/careers-5.jpeg',background: 'rgb(27, 23, 15'},
            ]
        };
    },
    computed: {
        activeSlides() {
            return this.$data.list.filter((_,index) => index === this.$data.index)
        }
    },

    mounted() {
         this.$intersectionObserver.observe(this.$el,this.onElementObserved);
    },
    beforeDestroy() {
        this.stopSliderMove();
        this.$intersectionObserver.unobserve(this.$el);
    },
    methods: {
        onElementObserved(intersectionRatio) {
            if(intersectionRatio > 0.7) {
                this.sliderMove();
            } else {
                this.stopSliderMove();
            }
            
        },
        sliderMove() {
           const MAX = this.list.length - 1;
           this.timeoutId = setTimeout(()=>{
                this.index = this.index === MAX ? 0 : this.index + 1;
                this.intervalId = setInterval(()=>{
                    this.index = this.index === MAX ? 0 : this.index + 1;
                },4000);
            },2000);
            
        },
        stopSliderMove() {
            if(this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
            if(this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }    
    },
 
}
</script>

<style lang="scss" scoped>
    .career {
        position: relative;
        width: 100%;

        .slideshow {
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0; 
            padding: 0;
            .slide {
                &--fade-enter-active, &--fade-leave-active {
                    transition: opacity 2s;
                }
                &--fade-enter, &--fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
                    opacity: 0; 
                }
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                &__image {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-repeat: no-repeat;
                    background-position: center top;
                    height: auto;
                    background-size: auto;
                }
            }
        }

        .description {
            min-height: 412px;
            padding: 56px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            color: #fff;
            max-width: 1712px;
            margin: 0 auto;

            &__button {
                margin-top: 32px;
            }

            &__title {
                font-size: 2.75rem;
                font-weight: 500;
                line-height: 1.5;
            }
            &__subtitle {
                font-weight: 400;
                line-height: 1.5;
                font-size: 1.5rem;
                color: rgba(255,255,255,.8);
            }
            
        }
    }
</style>