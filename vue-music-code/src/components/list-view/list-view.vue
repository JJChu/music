<template>
  <scroll
      class="list-view"
      :probeType="3"
      :data="data"
      :listenScroll="listenScroll"
      @scroll="onScroll"
      ref="listview">
    <ul>
      <li class="list-group" v-for="(group,index) in data" :key="index" ref="listGroup">
        <h2 class="group-title">{{group.title}}</h2>
        <ul class="group-content">
          <li class="group-item" v-for="(item,index) in group.items" :key="index" @click="selectItem(item)">
            <img class="avatar" v-lazy="item.avatar" :alt="item.name">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div
        class="list-shortcut"
        @touchstart="onShortcutTouchStart"
        @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li
            :class="['item', {'active': currentIndex === index}]"
            v-for="(item,index) in shortcutList"
            :key="index"
            :data-index="index">{{item}}</li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h2 class="fixed-title">{{fixedTitle}}</h2>
    </div>
    <div class="loading-wrapper vertical-middle" v-show="!data.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../scroll/scroll'
import Loading from '../loading/loading'
import {getData} from 'common/js/dom'

const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 30

export default {
  name: 'ListView',
  data () {
    return {
      currentIndex: 0,
      scrollY: -1,
      diff: -1
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created () {
    this.touch = {}
    this.listenScroll = true
    this.listHeight = []
  },
  computed: {
    shortcutList () {
      return this.data.map(group => group.title.substr(0, 1))
    },
    fixedTitle () {
      if (this.scrollY > 0) {
        return ''
      }
      return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
    }
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    onShortcutTouchStart (e) {
      let anchorIndex = parseInt(getData(e.target, 'index'))
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex

      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove (e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = this.touch.anchorIndex + delta

      this._scrollTo(anchorIndex)
    },
    onScroll (pos) {
      this.scrollY = pos.y
    },
    refresh () {
      this.$refs.listview.refresh()
    },
    _scrollTo (index) {
      console.log(index)
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scrollY = -this.listHeight[index]
      this.$refs['listview'].scrollToElement(this.$refs['listGroup'][index], 0)
    },
    _calculateHeight () {
      this.listHeight = []
      const list = this.$refs['listGroup']
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        height += element.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data () {
      setTimeout(_ => {
        this._calculateHeight()
      }, 20)
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      // when scroll to top
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // when scroll in medium
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i]
        const height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      // when scroll to bottom and -newY greater than the last one in listHeight
      this.currentIndex = listHeight.length - 2
    },
    diff (newVal) {
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs['fixed'].style.transform = `translate3d(0, ${fixedTop}px, 0)`
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'

  .list-view
    position relative
    width 100%
    height 100%
    overflow hidden
    background-color $color-background
    .list-group
      padding-bottom 30px
      .group-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background-color $color-highlight-background
      .group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 50px
          height 50px
          border-radius 50%
        .name
          margin-left 20px
          color $color-text-l
          font-size $font-size-medium
    .list-shortcut
      position absolute
      right 0
      top 50%
      transform translateY(-50%)
      width 20px
      padding 20px 0
      border-radius 10px
      text-align center
      background-color $color-background-d
      font-family Helvetica
      .item
        padding 3px
        line-height 1
        color $color-text-l
        font-size $font-size-small
        &.active
          color $color-theme
    .list-fixed
      position absolute
      top 0
      left 0
      width 100%
      .fixed-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background-color $color-highlight-background
</style>
