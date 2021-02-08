<template>
<section class="section section--banner" >
    <h1 :class="'title title--big title--'+ planets[pageId].color" >{{ planets[pageId].name}}</h1>
    <img class="img img--banner" :src="planets[pageId].banner" :alt="planets[pageId].bannerText" >

    <!-- <img class="blop" src="@/assets/BobaFettPalace.jpg" alt=""> -->
</section>
</template>

<script>
import stars from '@/Starwars.js'

export default {
  data () {
    return {
      planets : stars.planets,
    }
  }, 
  computed :{
    pageId (){
      if (this.$route.params.id){
        return this.$route.params.id - 1
      }
      return 0

    }
  }, 

}

</script>

<style lang="scss" scoped>
.section{

  &--banner{
    position: relative;
    background-color: $c-white;
  } 
}

.img--banner{
  filter: brightness(0.8);
  margin: 0 auto;
  display: block;
  z-index: -1;
}

.title{
  z-index: 2;
  text-transform: uppercase;
  font-weight: $w--bolder;
  font-size: $s-mob--biggest;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  color: $c-black;
  width: 100%;
  text-align: center;
  color: $c-dark;

  @include sm{
    font-size: $s-mob--massive;
  }
  @include tb{
    font-size: $s-tab--massive;
  }
  @include lg{
    font-size: $s-desk--bigger;
  }
  @include xl{
    font-size: $s-desk--bigger;
  }

  &--dark{
    color: $c-white;
  }

}

</style>