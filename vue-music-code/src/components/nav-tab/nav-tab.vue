<template>
  <div class="nav-tab">
    <router-link tag="div" class="tab-item" to="/recommend">推荐</router-link>
    <router-link tag="div" class="tab-item" to="/singer">歌手</router-link>
    <router-link tag="div" class="tab-item" to="/rank">排行</router-link>
    <router-link tag="div" class="tab-item" to="/search">搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavTab'
}
</script>

<style lang="stylus">
  @import "~common/stylus/variable"

  .nav-tab
    display flex
    height $header-height
    line-height $header-height
    color $color-text-l
    .tab-item
      flex 1
      text-align center
      &.router-link-active
        border-bottom solid 2px $color-theme
        color $color-theme
</style>
