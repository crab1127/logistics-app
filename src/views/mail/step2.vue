<template>
  <div>
    <h3> {{ $t('mail.xzqjfs') }} </h3>
     <ul>
      <li class="media" v-for="item in quoteChannel" :key="item.id">
        <div class="media-hd">
          <img :src="item.logoImg" alt="" width="200px" height="100px">
        </div>
        <div class="media-bd">
          <div class="media-title">
            {{ item.name }}
          </div>
          <p>{{ item.channelDesc }}</p>
        </div>
        <div>{{ item.costTimeFrom }}-{{ item.costTimeTo }}个工作日</div>
        &nbsp;&nbsp;
        <div style="width: 350px; margin-left: 20px;">
          <ul>
            <li v-for="ac in item.feeLadderList" :key="ac">
              <el-tag>{{ ac.feeType }} </el-tag> 重量区间： {{ ac.weightFrom }} ~ {{ ac.weightTo }}， 价格: <span class="red"> {{ ac.amount }}</span>
            </li>
          </ul>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="onNext(item.id)">立即购买</el-button>
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
      this.$router.push({name: 'step-3', query: {id}})
    },
    loadQuote () {
      const params = {
        fromId: 102,
        reachId: 23,
        weight: this.mail.weight
      }
      API.quoteChannel(params).then(res => {
        this.quoteChannel = res.body.data
      })
    }
  }
}
</script>

