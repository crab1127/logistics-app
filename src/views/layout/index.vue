<template>
  <div>
    <header class="header">
      <div class="container aaa">
        <h1>
          <router-link to="/">
            <img src="../../assets/images/logo.jpg" height="80px" alt=""> 
          </router-link>
        </h1>
        <ul class="nav">
          <li>
            <router-link to="/">{{ $t('nav.index') }}</router-link>
          </li>
          <li>
            <router-link to="/mail">{{ $t('nav.mail') }}</router-link>
          </li>
          <li>
            <router-link to="/news">{{ $t('nav.news') }}</router-link>
          </li>
          <li>
            <router-link to="/product">产品</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t('nav.about') }}</router-link>
          </li>
          <li class="user" v-if="user && user.realname ">
            <router-link to="/home">{{ user.realname }}</router-link>
          </li>
          <li class="user" v-if="user && user.realname ">
            <span @click="onQuite">退出</span>
          </li>
          <li class="user" v-if="!user || !user.realname ">
            
            <router-link to="/login">{{ $t('common.login') }}</router-link>
            &nbsp;/&nbsp;
            <router-link to="/sign-up">{{ $t('common.register') }}</router-link>
          </li>
          <li class="lang">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="tiggleLang('zh')">中文</span>
            &nbsp;/&nbsp;
            <span @click="tiggleLang('en')">EN</span>
          </li>
        </ul>
      </div>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
    <footer class="footer">
      &copy;2017 某某公司
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapState({
      user: state => state.global.user
    })
  },
  data () {
    return {
    }
  },
  methods: {
    tiggleLang (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    },
    onQuite () {
      localStorage.clear()
      this.$router.push({path: '/'})
      location.reload()
    }
  }
}
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #fff;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }
  .aaa{
    display: flex;
    justify-content: space-between;
  }
  .nav {
    display: flex;
  }
  .nav li {
    display: flex;
    font-size: 16px;
    padding: 0 10px;
  }
  .nav a {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .nav .lang,
  .nav .user{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .footer {
    padding: 20px;
    text-align: center;
  }
</style>


