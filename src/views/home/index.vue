<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.home') }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-top: 10px;">
      <el-col :span="4">
        <el-menu
          default-active="info"
          @select="nav"
          class="el-menu-vertical-demo">
          <el-menu-item index="info">
            <span slot="title">账号信息</span>
          </el-menu-item>
          <el-menu-item index="order">
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="money">
            <span slot="title">账号余额</span>
          </el-menu-item>
          <el-menu-item index="address">
            <span slot="title">地址管理</span>
          </el-menu-item>
          <el-menu-item index="password">
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view style="margin-left: 20px; background: #fff; padding: 20px;" ></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as API from '@/store/api'
  export default {
    name: 'home',
    computed: {
      ...mapState({
        user: state => state.global.user
      })
    },
    mounted () {
      API.userInfo().then(res => {
        // this.$store.commit('SET_USER', res.body.data)
        if (!res.body.data.username) {
          this.$router.replace({name: 'login'})
        }
      }).catch(() => {
        this.$store.commit('SET_USER', {})
      })
    },
    methods: {
      nav (name) {
        console.log(name)
        this.$router.replace({
          path: '/home/' + name
        })
      }
    }
  }
</script>

