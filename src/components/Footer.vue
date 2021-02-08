<template>
    <footer class="section section--footer">
      <small>© <a href="http://www.tomdelfosse.be">Tom&nbsp;Delfosse</a> — Janvier&nbsp;2021.</small>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>

    .section--footer{
        margin-bottom: $s-mob--big*4;
        text-align: center;

        @include tb { 
            margin-bottom: $s-tab--big*4;
            }
        @include lg { 
            margin-bottom: $s-desk--big;
            }

        small{

            font-size: $s-mob--smaller;
            @include sm{
                font-size: $s-mob--small;
            }

            @include tb{
                font-size: $s-tab--small;
            }

            @include lg{
                font-size: $s-desk--smallest;
            }

            a{
                color: inherit;
                transition: $transition;

                &:hover{
                    box-shadow: inset 0 -50px 0 0 $c-white, 0 0 0 2px $c-white;
                    color: $c-black;

                }
            }
        }
    }

</style>