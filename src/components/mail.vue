<template>
    <form class="mail">
        <div>
            <label for="">{{ $t('mail.fjd') }}</label>
            
            <el-input value="英国" readonly></el-input>
        </div>
        <div>
            <label for="">{{ $t('mail.sjd') }}&nbsp;&nbsp;</label>
            <el-select v-model="info.reachId" placeholder="请选择">
                <el-option
                v-for="item in county"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div>
            <label for="">{{ $t('mail.zl') }}&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="info.weight"></el-input>KG &nbsp;
            <label for="">{{ $t('mail.cd') }} </label>
            <el-input v-model="info.packageCd"></el-input>CM
        </div>
        <div>
            <label for="">{{ $t('mail.kd') }}&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="info.packageHeigth"></el-input>CM &nbsp;
            <label for="">{{ $t('mail.gd') }} </label>
            <el-input v-model="info.packageWidth"></el-input>CM
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <el-button type="primary" @click="submit">{{ $t('mail.ljgs') }}</el-button>
            <!-- <el-button type="text" icon="plus">{{ $t('mail.tjbg') }}</el-button> -->
        </div>
    </form>
</template>

<script>
    import { mapState } from 'vuex'
export default {
  name: 'mail',
  computed: {
      ...mapState({
          mail: state => state.mail.info
      })
  },
  data () {
      return {
          info: {
            fromId: 102,
            reachId: 23,
            weight: null,
            packageCd: null,
            packageHeigth: null,
            packageWidth: null
          },
          county: [
              {label: '中国', value: 23},
            //   {label: '中国香港', value: '23'}
          ]
      }
  },
  mounted () {
    Object.assign(this.info, this.mail)
  },
  methods: {
    submit () {
        this.$store.commit('SET_QD_INFO', {...this.info})
        this.$router.push({name: 'step-2', query: { id: 2 }})
    }
  }
}
</script>

<style scoped>
.mail > div {
  display: flex;
  margin: 8px 0;
  align-items: center;
}
.mail .el-input {
  margin-left: 10px;
  flex: 1;
}
</style>


