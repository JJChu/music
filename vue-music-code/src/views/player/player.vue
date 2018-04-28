<template>
  <div class="player" v-show="playList.length">
    <div class="normal-player" v-show="fullScreen">
      <div class="background"><img width="100%" height="100%" src="" alt=""></div>
      <div class="top">
        <div class="back"><i class="icon-back"></i></div>
        <h1 class="title"></h1>
        <h2 class="subtitle"></h2>
      </div>
      <div class="middle"></div>
      <div class="bottom"></div>
    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Player',
  ...mapGetters([
    'fullScreen',
    'playList'
  ])
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'

  .player
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background rgba(100,100,100,.5)
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 150
      background-color $color-background
      .background
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        z-index -1
        opacity 0.6
        filter blur(20px)

</style>
