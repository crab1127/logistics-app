<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">物流注册</h3>
      <el-form-item prop="realname">
        <el-input name="realname" type="text" v-model="loginForm.realname" autoComplete="on" placeholder="昵称" />
      </el-form-item>
      <el-form-item label="" prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="" prop="email">
        <el-input name="email" type="email" v-model="loginForm.email" autoComplete="on" placeholder="邮箱" />
      </el-form-item>
      <el-form-item label="" prop="countryId">
        <el-select v-model="loginForm.countryId" placeholder="请选择国家">
            <el-option
            v-for="item in county"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" prop="phone">
        <el-input name="phone" type="number" minlength="11" v-model="loginForm.phone" autoComplete="on" placeholder="手机" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
          <span class="show-pwd" @click="showPwd">显示</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          Sign up
        </el-button>
      </el-form-item>
      <router-link :to="{name: 'login'}" style="color: #ccc;">
        已经有账号？登录
      </router-link> 
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/util/validate'
import * as API from '@/store/api'

export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        countryId: '',
        headImgs: '122332',
        language: 'zh',
        phone: '',
        realname: '',
        email: ''
        // clientId: 'c1775ad0-055e-4414-af03-5fd9bd6b09de'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }],
        countryId: [{ required: true, trigger: 'blur' }],
        phone: [{ required: true, trigger: 'blur' }],
        realname: [{ required: true, trigger: 'blur' }],
        email: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      pwdType: 'password',
      county: [
        {label: '中国', value: '23'},
        // {label: '中国香港', value: '102'},
        {label: '英国', value: '102'}
      ]
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      console.log(22323)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          API.signUp(this.loginForm)
          .then((res) => {
            if (res.body.status !== 'success') {
              throw new Error(res.body.message)
            }
            this.$message('注册成功')
            this.$router.push({ path: '/login' })
          })
          // .then(res => {
          //   this.$store.commit('SET_USER', res.body.data)

          //   this.$router.push({ path: '/home' })
          // })
          .catch((e) => {
            alert('注册失败， 请重试')
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
  @bg:#2d3a4b;
  @dark_gray:#889aa4;
  @light_gray:#eee;

  .login-container {
    position: relative;
    height: 100vh;
    background-color: @bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: @light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: @dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: @light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: @dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
