<template>
  <div>
    <h2>服务详情</h2>
    <div v-if="serive">
      <ul>
      <li v-for="(item, index) in serive" :key="item.id">
        <div class="media">
          <div class="media-hd">
            <img :src="item.logoService" alt="" width="200px" height="100px">
          </div>
          <div class="media-bd">
            <div class="media-title">
              {{ item.serviceName }}
            </div>
            <div v-html="item.serviceDesc"></div>
          </div>
          <div style="width:200px;">{{ item.feeType | getName }}</div>
          <el-button type="text" @click="onChang(item.serviceId, item.feeType, index)">查看服务列表</el-button>
        </div>
        <div style="padding: 20px; background:#f4f4f4;" v-if="item.list && item.list.length">
          <div class="media" v-for="se in item.list" :key="se.id">
            <div class="media-hd">
              <img :src="se.logo" alt="" width="200px" height="100px">
            </div>
            <div class="media-bd">
              <div class="media-title">
                {{ se.name }}
              </div>
              <div v-if="se.address"> 地址：{{ se.address }}</div>
              <div v-html="se.desc"></div>
            </div>
            <div>{{ se.partnerName }}</div>
            <div style="width: 350px; margin-left: 20px;">
              <ul>
                <li v-for="ac in se.ladderList" :key="ac">
                  重量区间： {{ ac.weightFrom }} ~ {{ ac.weightTo }}， 价格: <span class="red"> {{ ac.amount }}</span>
                </li>
              </ul>
            </div>
            <el-button type="primary" @click="onNest(se, item.feeType)">选择服务</el-button>
          </div>
        </div>
      </li>
    </ul>
    </div>
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
    data () {
      return {
        serive: null
      }
    },
    mounted () {
      if (!this.mail.packageWidth) {
        return this.$router.replace({name: 'step-1'})
      }
      const id = this.$route.query.id
      this.$store.commit('SET_STEP', {step: 3})
      // 固定为英国
      API.quoteService(102).then(res => {
        const serive = res.body.data
        serive.forEach(item => item.list = [])
        this.serive = serive 
      })
    },
    methods: {
      onChang (id, feeType, index) {
        API.quoteServiceInfo(id, {feeType}).then(res => {
          this.serive[index].list =res.body.page.items
        })
      },
      onNest(item, feeType) {
        this.$store.commit('SET_QD_INFO', {...this.mail, feeType: feeType, serviceId: item.id  })
        this.$router.push({name: 'step-4'})
      }
    },
    filters: {
      getName (id) {
        let str
        if (id === 'selfDelivery') {
          str = '自取'
        } else {
          str = '自送'
        }
        return str
      }
    }
  }
</script>

<style scoped>
  
</style>


