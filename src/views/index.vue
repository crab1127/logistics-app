<template>
  <div>
    <div class="area1 flex">
      <div class="banner">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mail-count"></div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .area1 .banner {
    flex: 1;
    background: #eee;
  }
  .area1 .mail-count {
    width: 300px;
    height: 300px;
  }
</style>
