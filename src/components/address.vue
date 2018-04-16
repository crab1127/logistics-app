<template>
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
    <!-- <el-form-item>
      <el-button @click="onSure" type="primary">确定</el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
  // import * as API from '@/store/api'
  export default {
    name: 'address',
    prop: {
      action: {
        type: String,
        default: 'add'
      },
      type: {
        type: String,
        default: 'from' // reach
      },
      address: {
        type: Object,
        default() {
          return {
            englishName: null,
            mobile: null,
            email: null,
            postcode: null,
            countryId: null,
            provice: null,
            city: null,
            town: null,
            street: null
          }
        }
      }
    },
    data() {
      return {
        form: {
          englishName: null,
          mobile: null,
          email: null,
          postcode: null,
          countryId: null,
          provice: null,
          city: null,
          town: null,
          street: null
        }
      }
    },
    watch: {
      address: {
        deep: true,
        handler () {
          console.log(this.address)
          this.form = {}
          Object.assign(this.form, this.address)
        }
      },
      form: {
        deep: true,
        handler () {
          this.$emit('update:address', {...this.form } )
        }
      }
    },
    mounted () {
      Object.assign(this.form, this.address)
    },
    methods: {
      // onSure() {
      //   this.$emit('update:address', {...this.form } )
      //   // if (this.action === 'add') {
      //   //   this.create()
      //   // } else {
      //   //   this.update()
      //   // }
      // },
      // update () {
      //   const id = this.form.id
      //   const form = { ...this.form }
      //   const addressUpdateServe = this.activeName === 'from' ? API.addressFromUpdate(id, form) : API.addressReachUpdate(id, form)
      //   addressUpdateServe.then(res => {
      //     // 重新请求数据
      //     this.load()
      //   })
      // },
      // create () {
      //   const form = { ...this.form, address: this.form.provice + this.form.city + this.form.town + this.form.street }
      //   const addressCreateServe = this.activeName === 'from' ? API.addressFromCreate(form) : API.addressReachCreate(form)
      //   addressCreateServe.then(res => {
      //     // 重新请求数据
      //     this.load()
      //   })
      // },
    }
  }
</script>

<style>
  div.el-form-item{
    box-sizing: border-box;
  }
  div.el-form-item *{
    box-sizing: border-box;
  }
</style>


