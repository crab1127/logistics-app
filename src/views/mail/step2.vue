<template>
  <div>
    <h3> {{ $t('mail.xzqjfs') }} </h3>
     <ul>
      <li class="media" v-for="i in 4" :key="i">
        <div class="media-hd">
          <img src="../../assets/images/hb1.png" alt="">
        </div>
        <div class="media-bd">
          <div class="media-title">
            奶粉包髓专线
          </div>
          <p>全英唯一合法奶粉包髓</p>
        </div>
        <div>6-12个工作日</div>
        &nbsp;&nbsp;
        <div class="red">￥18.52</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link :to="{name: 'step-3', query: { id: i }}">
          <el-button type="primary">立即购买</el-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import * as API from '@/store/api'
import { mapState } from 'vuex'

export default {
  name: 'mail-step-1',
  computed: {
    ...mapState({
      mail: state => state.mail.info
    })
  },
  mounted () {
    this.$store.commit('SET_STEP', {step:2})
  //  this.loadQuote()
  },
  methods: {
    loadQuote () {
      const params = {
        fromId: this.mail.fromId,
        reachId: this.mail.reachId,
        weight: this.mail.weight
      }
      API.quoteChannel(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

