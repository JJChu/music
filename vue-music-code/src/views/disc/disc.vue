<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  name: 'Disc',
  components: {
    MusicList
  },
  filters: {},
  props: {},
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  watch: {},
  created () {
    this._getSongList()
  },
  mounted () {},
  methods: {
    _getSongList () {
      getSongList(this.disc.dissid).then(res => {
        console.log(JSON.parse(res))
        // if (res.code === ERR_OK) {

        // } else {

        // }
      })
    }
  }
}
</script>

<style lang="stylus">
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0 0)
  .slide-enter-active, .slide-leave-active
    transition all 0.3s
</style>
