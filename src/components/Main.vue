<template>
<section class="section section--main">
    <p>{{planets[pageId].description }}</p>

    <h2 class="title title--medium">Notable&nbsp;Events&#8239;:</h2>

    <ul class="list" v-for="event in planets[pageId].events" :key="event">
        <li>
            <h3 class="title title--small">{{event.eventName}}</h3>
            <p>{{ event.eventDescription}}</p>
            <p>{{ event.eventTime}}</p>
               <figure>
                   <img :src="event.eventImg" :alt="event.eventAlt" :srcset="event.eventImgRetina">
                <figcaption class="caption">{{ event.eventImgCaption}}</figcaption>
               </figure>
            
            
            <p>{{event.eventOutcome}}</p>
        </li>
    </ul>
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
  }
}
</script>

<style lang="scss" scoped>

  .section--main{
    margin: 0 $s-mob--small;
    max-width: 550px;
    @include sm{
        margin: 0 $s-mob--bigger ;
    }

    @include tb{
      margin: 0 auto;
    }
  }

  .list{
    padding: 0;
    list-style: none;
  }

  .title{
    &--medium{
      letter-spacing: 7px;
      text-transform: uppercase;
      font-size: $s-mob--medium;
      border-bottom: 1px solid $c-white;
      margin-top: $s-mob--massive;

      @include tb{
        font-size: $s-tab--medium;
        margin-top: $s-tab--massive;
      }

      @include lg{
        font-size: $s-desk--small;
        margin-top: $s-desk--big;

      }
    }

    &--small{
      text-transform: uppercase;
      font-size: $s-mob--big;

      @include tb{
        // margin-bottom: 0;
        font-size: $s-tab--big;
      }

      @include lg{
        font-size: $s-desk--medium;
      }
        
    }
  }

  figure{
    margin: 0;
    max-width: 550px;

    @include lg{
      position: relative;
      width: 120%;
      max-width: inherit;
      margin-left: -10%;
  }
    img{
      width: 100%;
    }
  }

  .caption{
    font-style: italic;
    font-size: $s-mob--small;
    line-height: 1.7;
    margin-bottom: $s-mob--bigger;
    @include tb{
      font-size: $s-tab--small;
      margin-bottom: $s-tab--bigger;

    }
    @include lg{
      font-size: $s-desk--smallest;

    }
  }

  p{
    font-size: $s-mob--medium;
    line-height: 1.9;
    orphans: 2;
    max-width: 500px;
    margin-left:  auto;
    margin-right:  auto;

    &:nth-child(1){
        background-color: $c-white;
        padding: 20px;
        color: $c-black;
        font-weight: $w--bold;
        max-width: none;

        @include tb{
          width: 100%;
          margin-left: -10%;
          padding: 20px 10%;
        }
        
        @include lg{
          width: 100%;
          margin-left: -20%;
          padding: 40px 20%;
          font-size: $s-desk--smaller;
        }

        @include xl{
          width: 140%;
          margin-left: -40%;
          font-size: $s-desk--small;
        }
    }

    &:nth-child(3){
      z-index: -1;
      margin: 0 0 $s-mob--big 0;
      padding: 0;
      display: block;
      border-left: 1px solid $c-white;
      padding-left: 15px;
      position: relative;

      @include tb{
        margin: 0 0 $s-tab--big 0;
      }

      @include lg{
        left: -10%;
        margin: 0 0 $s-desk--small 0;
      }
    
    }

    @include tb{
      font-size: $s-tab--medium;
      max-width: inherit;

    }
    @include lg{
      font-size: $s-desk--smaller;

      
    }

  }

</style>