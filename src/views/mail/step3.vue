<template>
  <div>
    <h3> {{ $t('mail.xzjnfw') }} </h3>
    <ul>
      <li class="media" v-for="i in 4" :key="i">
        <div class="media-hd">
          <img src="../../assets/images/hb3.png" alt="">
        </div>
        <div class="media-bd">
          <div class="media-title">
            奶粉包髓专线
          </div>
          <p>全英唯一合法奶粉包髓</p>
        </div>
        &nbsp;&nbsp;
        <div class="red">￥18.52</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link :to="{name: 'step-4', query: { id: i }}">
          <el-button type="primary">立即购买</el-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'mail-step-1',
    mounted () {
      this.$store.commit('SET_STEP', {step:3})
    }
  }
</script>

