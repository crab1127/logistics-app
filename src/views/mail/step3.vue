<template>
  <div>
    <h2>服务详情</h2>
    <div v-if="serive">
      <h3>国家：{{ serive.countryEn }}</h3>
      <div style="margin-bottom: 20px;">
        <span>取件价格阶梯</span>
        <div v-for="(a, index) in serive.pickUpLadderlList" :key="index">
          范围：{{ a.weightFrom }} ~ {{ a.weightTo }}, 价格： {{ a.amount }}
        </div>
      </div>
      <div style="margin-bottom: 20px;">
        <span>派送价格阶梯	</span>
        <div v-for="(a, index) in serive.deliveryLadderList" :key="index">
          范围：{{ a.weightFrom }} ~ {{ a.weightTo }}, 价格： {{ a.amount }}
        </div>
      </div>
      <router-link :to="{name: 'step-4'}">
        <el-button type="primary" class="button">下一步 </el-button>
      </router-link>
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
      API.quoteService(id).then(res => {
        console.log(res)
        this.serive = res.body.data
        console.log(this.serive)
      })
    },
    methods: {
    }
  }
</script>

