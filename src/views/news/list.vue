<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.news') }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="bg-fff" style="margin-top:10px;">
      <ul class="news-list">
        <li class="media" v-for="item in cmsList" :key="item.id" @click="nav(item.id)">
          <div class="media-hd">
            <img :src="item.imgUrl" width="200px" height="200px" alt="">
          </div>
          <div class="media-bd">
            <div class="flex">
              <h4 class="flex-item media-title">
                {{ item.title }}
              </h4>
              <time>{{ item.createTime | dateFormat('yyyy-MM-dd') }}</time>  
            </div>
            <p>
              {{ item.description | removeHTMLTag }}
            </p>
          </div>
        </li>
      </ul>
      <div class="row">
        <el-pagination
          background
          @current-change="onChange"
          layout="prev, pager, next"
          :total="page.total">
        </el-pagination>
      </div>
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
      API.cmsList(this.page).then(res => {
        this.cmsList = res.body.page.items
        this.page.total = res.body.page.total
      })
    },
    onChange (page) {
      this.page.page = page
      this.load()
    },
    nav (id) {
      this.$router.push({name: 'news-content', params: {id}})
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


