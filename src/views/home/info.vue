<template>
  <div>
    <h2 style="margin-bottom:10px;"> 个人信息 </h2>
    <el-form class="bg-fff" label-width="80px" :model="user">
      <el-form-item label="姓名">
        <el-input v-model="user.realname"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="user.username" readonly></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="email" v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input type="number" v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="国家">
        <el-select v-model="user.countryId" placeholder="请选择">
          <el-option 
            v-for="item in countryList" 
            :key="item.value"
            :label="item.label" 
            :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="user.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">保存</el-button>
      </el-form-item>
</el-form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as API from '@/store/api'
  export default {
    name: 'user-info',
    computed: {
      ...mapState({
        user: state => state.global.user
      })
    },
    data () {
      return {
        countryList: [
          { label: '中国', value: '23' },
          { label: '英国', value: '102' }
        ]
      }
    },
    mounted () {
      API.userLevel().then(res => {
        console.log(res)
      })
    },
    methods: {
      onSubmit () {
        const params = {
          realname: this.user.realname,
          email: this.user.email,
          phone: this.user.phone,
          countryId: this.user.countryId,
          address: this.user.address,
          custId: this.user.custId
        }
        API.changeUserInfo(this.user.custId, params).then(res => {
          if (res.body.status !== 'success') {
            throw new Error(res.body.message || res.body.msg)
          }
          this.$message('修改成功')
        })
        .catch(res => {
          this.$message.error('修改失败')
        })
      }
    }
  }
</script>

<style>
  .user-list li{
    line-height: 30px;
  }
</style>


