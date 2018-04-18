<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t('nav.index') }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('nav.mail') }}</el-breadcrumb-item>
    </el-breadcrumb>
    
    <div class="step-container">
      <el-steps :active="active" align-center>
        <el-step :title="$t('mail.step1')"></el-step>
        <el-step :title="$t('mail.step2')"></el-step>
        <el-step :title="$t('mail.step3')"></el-step>
        <el-step :title="$t('mail.step4')"></el-step>
        <el-step :title="$t('mail.step5')"></el-step>
         <!-- <el-step :title="$t('mail.step6')"></el-step> -->
      </el-steps>
    </div>
    <!-- <div class="flex mail-header">
      <div style="width: 400px">
        
      </div>
      <div class="flex-item" style="padding-left: 40px;">
        <div v-html="$t('mail.tipsContent')"></div>
      </div>
    </div> -->
    <div class="mail-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'mail',
    computed: {
      ...mapState({
        active: state => state.mail.step
      })
    }
  }
</script>

<style>
  .step-container {
    background: #eee;
    margin: 10px 0 0;
    padding:50px;
  }
  .el-steps * {
    box-sizing: content-box
  }
  .mail-main {
    border: 2px solid #eee;
    padding: 20px;
  }
  .mail-header {
    background: #f4f4f4;
    padding: 20px;
  }
</style>
