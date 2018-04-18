<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.product') }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <div class="bg-fff" style="margin-top:10px;"> -->
      <el-row style="margin-top:10px;">
        <el-col :span="6" v-for="(item, index) in cmsList" :key="item.id" :offset="index > 0 ? 2 : 0">
          <router-link :to="{name: 'product-content', params: {id: item.id}}">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.imgUrl" class="image">
              <div style="padding: 14px;">
                <h3>{{ item.productTitle }}</h3>
                 <time>{{ item.createTime | dateFormat('yyyy-MM-dd') }}</time>  
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
      <div class="row ">
        <el-pagination
          background
          @current-change="onChange"
          layout="prev, pager, next"
          :total="page.total">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import * as API from '@/store/api'
import { dateFormat, removeHTMLTag } from '@/util/common'
export default {
  name: 'news-list',
  data () {
    return {
      page: {
        total: 0,
        page: 1,
        pageSize: 20
      },
      cmsList: []
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      API.productList(this.page).then(res => {
        this.cmsList = res.body.page.items
        this.page.total = res.body.page.total
      })
    },
    onChange (page) {
      this.page.page = page
      this.load()
    },
    nav (id) {
      this.$router.push({name: 'product-content', params: {id}})
    }
  },
  filters: {
    dateFormat,
    removeHTMLTag
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


