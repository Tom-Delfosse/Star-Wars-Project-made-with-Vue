<template>
    <nav class="nav">
        <router-link to="/" class="link link--home">Home</router-link>
        <div v-for="planet in planets" :key="planet">
          <router-link :to="{name : 'Planet', params: {id: planet.id} }" :class="'link link--'+planet.name">{{planet.name}}</router-link>
        </div>
    </nav>
</template>

<script>
import stars from '@/Starwars.js'

export default {
  data () {
    return {
      planets : stars.planets
    }
  }
}
</script>

<style lang="scss" scoped>

.nav{

  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0 auto;
  width: 100%;
  padding: $s-mob--small 0;
  position: fixed;
  bottom: 0;
  background-color: $c-black;
  border-top: 3px solid $c-white;
  z-index: 4;

  @include lg{
    position: inherit;
    bottom: inherit;
    justify-content: flex-start;
    border-top: inherit;
    max-width: 770px;
  }

  @include xl{
    max-width: 990px;
  }
  
  @include xxl{
    max-width: 1400px;
  }

  .link{
    &--home{
      border: 1px solid $c-white;
    }
    color: $c-white;
    text-transform: capitalize;
    text-decoration: inherit;
    margin: 0 $s-mob--smaller/2;
    padding:  0 $s-mob--smaller/2;

    &:hover{
        text-decoration: underline;
    }

    &--active{
      font-weight: $w--bold;  
      background-color: $c-white;
      color: $c-black;
    }
  }
}

</style>