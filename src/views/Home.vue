<template>
<main class="section section--main">
  <h1 class="title title--big">A Star&nbsp;Wars project made with&nbsp;Vue</h1>
  <PlanetShowcase/>
</main>

</template>

<script>
import PlanetShowcase from '@/components/PlanetShowcase.vue'
import stars from '@/Starwars.js'

  export default {
    name: 'Home',
    components: {
      PlanetShowcase
    },
    data ( ){
      return{
        planets: stars.planets
      }
    }

  }
</script>

<style lang="scss" scoped>
.section--main{
  margin: 0 $s-mob--small;
  max-width: 1400px;

  @include sm{
      margin: 0 $s-mob--bigger ;
  }

  @include tb{
    margin: 0 auto;
  }

}

.title{
  &--big{
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: $s-mob--big;
    margin: $s-mob--big auto $s-mob--bigger 0;
    display: block;
    max-width: 360px;

    @include tb{
      font-size: $s-tab--big;
      margin: $s-tab--big auto $s-tab--bigger;
      max-width: 550px;
    }

    @include lg{
      font-size: $s-desk--big;
      margin-top: $s-desk--medium;
      max-width: 770px;
    }

    @include xl{
      max-width: 800px;
      margin-left: 0;
    }
  }
}




</style>