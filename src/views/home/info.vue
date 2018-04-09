<template>
  <div>
    <h2 style="margin-bottom:10px;"> 个人信息 </h2>
    <ul class="user-list">
      <li>姓名: {{ user.realname }}</li>
      <li>用户名: {{ user.username }}</li>
      <li>邮箱: {{ user.email }}</li>
      <li>手机: {{ user.phone }}</li>
      <li>国家: {{ user.countryId }}</li>
      <li>地址: {{ user.address }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as API from '@/store/api'
  export default {
    name: 'user-info',
    computed: {
      ...mapState({
        user: state => state.global.user
      })
    },
    mounted () {
      API.userLevel().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style>
  .user-list li{
    line-height: 30px;
  }
</style>


