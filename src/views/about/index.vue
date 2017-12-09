<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.about') }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-top: 10px;">
      <el-col :span="6">
        <el-menu
          default-active="intro"
          @select="nav"
          class="el-menu-vertical-demo">
          <el-menu-item index="intro">
            <span slot="title">{{ $t('nav.intro') }}</span>
          </el-menu-item>
          <el-menu-item index="culture">
            <span slot="title">{{ $t('nav.culture') }}</span>
          </el-menu-item>
          <el-menu-item index="contact">
            <span slot="title">{{ $t('nav.contact') }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view style="margin-left: 20px;"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'about',
    methods: {
      nav(name) {
        console.log(name)
        this.$router.replace({
          path: '/about/' + name
        })
      }
    }
  }
</script>

