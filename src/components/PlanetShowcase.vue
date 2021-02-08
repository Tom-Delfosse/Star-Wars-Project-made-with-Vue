<template>
<ul class="planet-showcase-container">
<li class="planet-showcase-container__el" v-for="planet in planets" :key="planet">
    <router-link :to="{name : 'Planet', params: {id: planet.id} }" :class="'link link--'+planet.name">
        <img :src="planet.banner" :alt="planet.bannerText" :srcset="planet.bannerRetina">
        <h2 :class="'title title--medium title--'+planet.color"> {{ planet.name}}</h2>
        <p :class="'cp cp--' + planet.color">{{planet.catchphrase}}</p>

    </router-link>
</li>
</ul>
</template>


<script>
import stars from '@/Starwars.js'

export default {
  data () {
    return {
      planets : stars.planets,
    }
  },
}
</script>

<style lang="scss" scoped>

.planet-showcase-container {
    list-style: none;
    padding: 0;
    width: 100%;

    @include lg{
        // display: flex;
        // flex-direction: row;
        // flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
        // align-items: center;
        // justify-content: space-between;
    }

    &__el{
        // width: 100%;
        position: relative;
        transition: $transition;
        // width: 40%;
    

        &:hover{
            .title--white{
                color: $c-white;
            }

            .cp{
                color: $c-white;
            }

            img{
                filter: brightness(0.2)
            }
        }

        @include tb{
            max-width: 550px;
            margin: $s-tab--medium auto;
        }
        @include lg{
            max-width: 770px;
            margin: $s-desk--smaller auto;
        }
        @include xl{
            max-width: 700px ;
            margin: $s-desk--small 0;

            &:nth-child(even){
                
                margin-right: 0;
                margin-left: auto;
            }
        }
    }
}

img{
    width: 100%;
    filter: brightness(0.7);
    transition: $transition;
}

.title{
    &--medium{
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: $s-mob--big;
        position: absolute;
        margin: 0 ;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: 2;
        pointer-events: none;
        transition: $transition;

        @include tb{
        font-size: $s-tab--big;
        }

        @include lg{
        font-size: $s-desk--medium;
        }
    }

    &--white{
        color: $c-black;
    }
}



.cp{
    font-style: italic;
    font-size: $s-mob--small;
    line-height: 1.7;
    margin-bottom: $s-mob--bigger;
    position: absolute;
    z-index: 2;
    margin-bottom: 0;
    top: 42%;
    left: 50%;
    pointer-events: none;
    transform: translateX(-50%);
    transition: $transition;
    white-space: nowrap;

    @include tb{
        font-size: $s-tab--small;
        white-space: nowrap;
        top: 40%;
    }
    @include lg{
        font-size: $s-desk--smallest;
        top: 42%;

    }

    &--white{
        color: $c-black;
    }
}

a{
    color: $c-white;
    text-decoration: inherit;
}

</style>