<template>
  <div class="m-header">
    <!-- <div class="logo"></div> -->
    <h1 class="title">CMDB2.0</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .m-header
    position relative
    height $header-height
    text-align center
    color $color-theme
    .logo
      display inline-block
      width 30px
      height 32px
      bg-image('logo')
      background-size contain
      margin 5px 5px 0 0
    .title
      display inline-block
      font-size $font-size-large
      line-height $header-height
      vertical-align top
    .mine
      float right
      .icon-mine
        display block
        padding 12px
        font-size 20px
        color $color-theme
</style>
