<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.news') }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <ul class="news-list">
        <li class="media" @click="nav(12)">
          <div class="media-hd">
            <img src="../../assets/images/logo.jpg" width="300px" alt="">
          </div>
          <div class="media-bd">
            <div class="flex">
              <h4 class="flex-item media-title">
                手法对付阿迪斯发
              </h4>
              <time>2017-11-20</time>  
            </div>
            <p>
              上帝发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了解啦刚发的发生考虑阿斯蒂芬啊手动阀手动阀
              发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了
              发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了发誓发士大夫啊的事发生的付款了放大了饭卡手动阀了 
            </p>
          </div>
        </li>
      </ul>
      <div class="row">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-list',
  methods: {
    nav (id) {
      this.$router.push({name: 'news-content', params: {id}})
    }
  }
}
</script>

<style scoped>
  .news-list{
    padding: 10px 0;
  }
  .news-list li {
    padding: 10px;
    border-bottom: 1px dotted #ddd;
  }
  .news-list li:hover{
    background: #eee;
  }
</style>


