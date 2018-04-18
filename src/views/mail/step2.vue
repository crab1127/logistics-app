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
        <el-button type="primary" @click="onNext(i)">立即购买</el-button>
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
      mail: state => state.mail.info,
      user: state => state.global.user
    })
  },
  data () {
    return {
      quoteChannel: null
    }
  },
  mounted () {
    console.log()
    if (!this.user.id) {
      this.$alert('你还没登陆， 请先登陆').then(res => {
        this.$router.push({name: 'login'})
      })
      return
    }
    if (!this.mail.packageWidth) {
      return this.$router.replace({name: 'step-1'})
    }
    this.$store.commit('SET_STEP', {step: 2})
    this.loadQuote()
  },
  methods: {
    onNext (id, name) {
      this.$store.commit('SET_QD_INFO', {...this.mail, channelId: id, channelName: name})
      this.$router.push({name: 'step-3'})
    },
    loadQuote () {
      const params = {
        fromId: this.mail.fromId,
        reachId: this.mail.reachId,
        weight: this.mail.weight
      }
      API.quoteChannel(params).then(res => {
        this.quoteChannel = res.body.page.items
      })
    }
  }
}
</script>

