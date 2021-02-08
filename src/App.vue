<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;600;900&display=swap');

body{
  margin: 0;
  font-family: 'Catamaran', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $c-black;
  color: $c-white;
}
</style>
