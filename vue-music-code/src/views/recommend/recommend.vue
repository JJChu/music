<template>
  <div class="recommend" ref="recommend">
    <scroll class="scroll-wrapper" :data="discList" ref="scroll">
      <div>
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
            <li class="desc-item" v-for="item in discList" :key="item.dissid" @click="selectItem(item)">
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
      <div class="loading-wrapper vertical-middle" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import {getSliders, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'components/slider/slider'
import Scroll from 'components/scroll/scroll'
import Loading from 'components/loading/loading'
import {playlistMixin} from 'common/js/mixin'
import {mapMutations} from 'vuex'

export default {
  name: 'Recommend',
  mixins: [playlistMixin],
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
      }
    },
    handlePlaylist (playList) {
      const bottom = playList.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    selectItem (item) {
      this.setDisc(item)
      this.$router.push({
        path: '/recommend/' + item.dissid
      })
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
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

  .recommend
    position: fixed
    top: 88px
    bottom: 0
    width: 100%

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

</style>
