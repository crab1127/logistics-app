<template>
  <div>
    <div class="area1 flex">
      <div class="banner">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img height="300px" width="100%" src="https://img12.360buyimg.com/da/jfs/t5182/69/462910155/142359/66551a05/58ffffd8N892ce4a8.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mail-count">
        <index-mail />
      </div> 
    </div>
    <div class="area2">
      <div class="area2-item">
        <img src="../../assets/images/index-1.png" alt="">
        <span>{{ $t('index.ddgz') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-2.png" alt="">
        <span>{{ $t('index.jgfa') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-3.png" alt="">
        <span>{{ $t('index.zy') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-4.png" alt="">
        <span>{{ $t('index.yz') }}</span>
      </div>
    </div>
    <div class="area3">
      <div class="title">
        <h4>
          {{ $t('index.wlzx') }}
        </h4>
      </div>
      <ul class="li-text">
        <li>
          资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯
          <time>2017-01-11</time>  
        </li>
        <li>
          资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯
          <time>2017-01-11</time>  
        </li>
        <li>
          资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯
          <time>2017-01-11</time>  
        </li>
        <li>
          资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯
          <time>2017-01-11</time>  
        </li>
      </ul>
    </div>
    <div class="area4">
       <div class="title">
        <h4>
          {{ $t('index.hzhb') }}
        </h4>
      </div>
      <div class="area4-bd">
        <img src="../../assets/images/hb1.png" alt="">
        <img src="../../assets/images/hb2.png" alt="">
        <img src="../../assets/images/hb3.png" alt="">
        <img src="../../assets/images/hb4.png" alt="">
        <img src="../../assets/images/hb5.png" alt="">
        <img src="../../assets/images/hb6.png" alt="">
        <img src="../../assets/images/hb7.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import IndexMail from '@/components/mail'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    IndexMail
  }
}
</script>

<style scoped>
  .area1 .banner {
    flex: 1;
    background: #eee;
  }
  .area1 .mail-count {
    width: 350px;
    height: 300px;
    background: #eee;
    border: 1px solid #ddd;
    padding: 10px;
    margin-left: 20px;
  }
  .area2 {
    display: flex;
  }
  .area2-item {
    flex: 1;
    padding: 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .area2-item img {
    margin-bottom: 20px;
  }
  .area2-item span {
    font-size: 18px;
  }
  .area4-bd {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 10px;
  }
  .area4-bd img {
    border:1px solid #999
  }
</style>
