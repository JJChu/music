<template>
  <div id="app">
    <m-header></m-header>
    <nav-tab></nav-tab>
    <div class="router-warpper">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import NavTab from '@/components/nav-tab/nav-tab'
import Player from './views/player/player'

export default {
  name: 'App',
  components: {
    MHeader,
    NavTab,
    Player
  }
}
</script>

<style lang="stylus">
  @import 'common/stylus/variable'

  #app
    width 100%
    height 100%
    overflow hidden
    .router-warpper
      box-sizing border-box
      height 100%
      padding-top 88px
      margin-top -88px
</style>
