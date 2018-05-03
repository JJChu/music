<template>
  <div class="music-list">
    <!-- Header -->
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{title}}</h1>
    <!-- 背景图 -->
    <div class="bg-image">
      <div class="play-wrapper">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>
      <div class="filter"></div>
    </div>
    <div class="bg-layer"></div>
  
  </div>
</template>

<script>
import Scroll from 'components/scroll/scroll'

export default {
  name: 'MusicList',
  components: {
    Scroll
  }
}
</script>

<style lang="stylus">
  .music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color rgba(100,100,100,.5)

</style>
