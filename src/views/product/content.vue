<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">{{ $t('nav.product') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="bg-fff" style="margin-top:10px">
      <h2>{{ info.productTitle }}</h2>
      <div class="attr row">
        {{ $t('news.fbrq') }}: {{ info.createTime | dateFormat }} &nbsp;&nbsp;&nbsp;
      </div>
      <div class="content">
        <img :src="info.imgUrl" alt="">
        {{ info.productDesc }}
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '@/store/api'
import { dateFormat } from '@/util/common'
export default {
  name: 'news-content',
  data () {
    return {
      title: '资讯详情',
      info: {}
    }
  },
  mounted () {
    const id = this.$route.params.id
    API.productDetail(id).then(res => {
      this.info = res.body.data
    })
  },
  filters: {
    dateFormat
  }
}
</script>

<style scoped>
  h2 {
    font-size: 22px;
    text-align: center;
    padding: 20px;
  }
  .attr{
    padding: 10px;
  }
  .content {
    padding: 10px;
    line-height: 2;
  }
  .content p {
    text-indent: 2em;
    margin-bottom: 10px;
  }
</style>


