<template>
  <div>
    <h3> {{ $t('mail.xzjnfw') }} </h3>
    <div>
      <h4>
        发件人信息
      </h4>
      <el-form label-width="100px" :model="form">
        <el-form-item :label="$t('address.name')">
          <el-input v-model="form.englishName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('address.tel')">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item :label="$t('address.mail')">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item :label="$t('address.zipcode')">
          <el-input v-model="form.postcode"></el-input>
        </el-form-item>
        <el-form-item :label="$t('address.country')">
          <el-select v-model="form.countryId">
            <el-option label="中国" value="1" />
            <el-option label="英国" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('address.address')">
          <div class="flex">
            <el-input v-model="form.provice" :placeholder="$t('address.provice')"></el-input>
            <el-input v-model="form.city" :placeholder="$t('address.city')"></el-input>
            <el-input v-model="form.town" :placeholder="$t('address.town')"></el-input>
          </div>
          <!-- <el-input v-model="form.street"></el-input> -->
          <el-input v-model="form.street" :placeholder="$t('address.address_more')"></el-input>
        </el-form-item>
      </el-form>
      <h4>物品明细</h4>
    </div>
  </div>
</template>

<script>
  import * as API from '@/store/api'
  import { mapState } from 'vuex'
  export default {
    name: 'mail-step-1',
    data () {
      return {
        form: {},
        address: []
      }
    },
    mounted () {
      this.$store.commit('SET_STEP', {step:3})
    }
  }
</script>

