<template>
  <scroll class="scroll-wrapper" :data="discList">
    <div class="recommend">
      <div class="slider-wrapper" v-if="sliders.length">
        <slider>
          <div v-for="(item,index) in sliders" :key="index">
            <a :href="item.linkUrl"><img :src="item.picUrl"></a>
          </div>
        </slider>
      </div>
      <div class="disc" v-show="discList.length">
        <h1 class="disc-title">热门歌单推荐</h1>
        <ul>
          <li class="desc-item" v-for="item in discList" :key="item.dissid">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl" :alt="item.dissname">
            </div>
            <div class="text">
              <h2 class="name">{{item.creator.name}}</h2>
              <p  class="desc">{{item.dissname}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-wrapper" v-show="!discList.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import {getSliders, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'components/slider/slider'
import Scroll from 'components/scroll/scroll'
import Loading from 'components/loading/loading'
export default {
  name: 'Recommend',
  data () {
    return {
      sliders: [],
      discList: []
    }
  },
  created () {
    this._getSliders()
    this._getDiscList()
  },
  methods: {
    async _getSliders () {
      let {code, data} = await getSliders()
      if (code === ERR_OK) {
        this.sliders = data.slider
      }
    },
    async _getDiscList () {
      let {code, data} = await getDiscList()
      if (code === ERR_OK) {
        this.discList = data.list
        console.log(data)
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'

  .scroll-wrapper
    width 100%
    height 100%
    overflow hidden

  .disc
    &-title
      height 65px
      line-height 65px
      text-align center
      font-size $font-size-mediun
      color $color-theme
    .desc-item
      display flex
      box-sizing border-box
      align-items center
      padding 0 20px 20px 0
      .icon
        flex 0 0 60px
        width 60px
        padding 0 20px
      .text
        display flex
        flex-direction column
        justify-content center
        flex 1
        line-height 20px
        overflow hidden
        font-size $font-size-medium
        .name
          margin-bottom 10px
          color $color-text-d

  .loading-wrapper
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)

</style>
