<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import * as API from '@/store/api'
export default {
  name: 'app',
  mounted () {
    API.userInfo().then(res => {
      this.$store.commit('SET_USER', res.body.data)
    }).catch(() => {
      this.$store.commit('SET_USER', {})
    })
  }
}
</script>

<style>
 @import url('./assets/index.css');
</style>
