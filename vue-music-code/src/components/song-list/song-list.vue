<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="(song,index) in songs" :key="index" @click="selectItem(song, index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      default () {
        return []
      }
    },
    methods: {
      selectItem (item, index) {
        this.$emit('select', item, index)
      },
      getDesc (song) {
        return `${song.singer}-${song.album}`
      }
    }
  }
}
</script>

<style>

</style>
