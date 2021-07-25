<template>
    <section class="main-slider">
        <div class="slider">
            <div v-for="(item,i) in items" :key="i"  :class="`slider-item ${i === index  ? 'slider-item--active' : ''}`">
                <div :class="`slider-item__image ${i === index && visible  ? 'slider-item__image--active' : ''}`"  :style="{backgroundImage: `url(${item.image})`}"/>
            </div>
        </div>
        <div class="progress-bar">
            <div v-for="(item,i) in items" :key="i" :class="`progress-bar__item ${i === index && visible ? 'progress-bar__item--active' : ''}`" @click="handleClick(i)">
                <div   class="progress-bar__item__blue-row"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            intervalId: null,
            visible: false,
            items: [
                {
                    image: '/images/main-slider/wow.jpeg',
                },
                {
                    image: '/images/main-slider/diablo.png',
                },
                {
                    image: '/images/main-slider/overwatch.jpeg',
                },
                {
                    image: '/images/main-slider/diablo2.jpeg',
                },
                {
                    image: '/images/main-slider/wow-pet.jpeg',
                },
                {
                    image: '/images/main-slider/hearthstone.jpeg',
                },
            ]
        }
    },
    mounted() {
        this.$intersectionObserver.observe(this.$el,(intersectionRatio)=>{
            if(intersectionRatio > 0.7) {
                this.visible = true;
                this.intervalId = this.setInterval();
            } else {
                this.visible = false;
                clearInterval(this.intervalId);
            }
        });
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
        this.$intersectionObserver.unobserve(this.$el);
    },
    methods: {
        handleClick(i) {
            this.index = i;
            clearInterval(this.intervalId);
            this.intervalId = this.setInterval();
        },

        setInterval() {
            return setInterval(()=>{
                const MAX = this.items.length - 1;
                this.index =  this.index === MAX ? 0 : this.index+1;
            },5000)
        }
    }
}
</script>

<style lang="scss" scoped>

@keyframes changeWidth {
    0% {
        width: 0
    }

    100% {
        width: 100%
    }
}
.main-slider {
    .slider {
        height: 514px;
        position: relative;
        display: flex;
        align-items: center;
        &-item {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
            overflow: hidden;
            &--active {
                transition: opacity 500ms;
                opacity: 1;
            }
            &__image {
                width: 115vw;
                position: absolute;
                top: 0;
              
                bottom: 0;
                left: 0;
                background-position: center top;
                background-size: auto;
                transform: translateX(-120px);
                &--active {
                    transition: transform 15000ms;
                    transform: translateX(-240px) rotate(0.01deg);
                }
                &--backward {
                    transform: translateX(-240px) rotate(0.01deg);
                    &--active {
                        transition: transform 15000ms;
                        transform: translateX(-240px) rotate(0.01deg);
                    }
                }
                
                
            }
        }
    }
    .progress-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 1px;
        width: 100%;
        height: 24px;
        background-color: #0b0d12;
        &__item {
            width: 100px;
            height: 6px;
            margin: 0 4px;
            flex-grow: 0;
            position: relative;
            background: rgba(255,255,255,.5);
            flex-grow: 0;
            cursor: pointer;
            transition: transform 500ms;
            &:hover {
                background: rgba(255,255,255,.8);
            }
            &--active {
                background: #0086ca;
                transform: scaleY(1.75);
                &:hover {
                    background: #0086ca;
                }
                & > :first-child {
                    animation: changeWidth 5s linear;
                }
            }
            &__blue-row {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 0;
                background-color: #00aeff;
            }
        }
    }
}
</style>