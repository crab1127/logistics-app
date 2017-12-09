<template>
  <div>
    <h3> {{ $t('mail.xzqjfs') }} </h3>
    <ul>
      <li class="media" v-for="i in 2" :key="i">
        <div class="media-hd">
          <img src="../../assets/images/hb2.png" alt="">
        </div>
        <div class="media-bd">
          <div class="media-title">
            上门取货时间2017/11/14 星期起
          </div>
          <p>预约时间上门取货</p>
        </div>
        <div class="red">￥18.52</div>
        <router-link :to="{name: 'step-3', query: { id: i }}">
          <el-button type="primary">选择</el-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mail-step-1',
  mounted () {
    this.$store.commit('SET_STEP', {step:2})
  },
  methods: {
  }
}
</script>

