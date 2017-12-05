<template>
  <div>
    <section class="top-bar">
      <div class="container">
        <a href="">{{ $t('common.login') }}</a>
        <a href="">{{ $t('common.register') }}</a>
        <span>中午</span>
        <span>English</span>
      </div>
    </section>
    <header class="header container">
      <nav class="nav">
        <router-link to="/">{{ $t('nav.index') }}</router-link>
        <router-link to="/mail">{{ $t('nav.mail') }}</router-link>
        <router-link to="/news">{{ $t('nav.news') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
      </nav>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
