<template>
  <div>
    <h3> {{ $t('mail.xzjnfw') }} </h3>
    <div>
      <div class="el-steps el-steps--vertical">
        <div class="el-step is-vertical">
          <div class="el-step__head is-finish">
            <div class="el-step__line" style="margin-right: 0px;">
              <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
            </div>
            <div class="el-step__icon is-text">
              <div class="el-step__icon-inner">1</div>
            </div>
          </div>
          <div class="el-step__main">
            <div class="el-step__title is-finish">发件人信息</div>
            <div class="el-step__description is-finish">
              <div style="margin:10px 0 30px 40px">
                <el-select v-model="fromAddrId" placeholder="请选择地址">
                  <el-option
                    v-for="item in addressFrom"
                    :key="item.id"
                    :label="item.englishName"
                    :value="item.fromAddrId">
                    {{ item.englishName }} {{ item.mobile }}
                  </el-option>
                </el-select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <router-link :to="{name: 'user-address'}" target="_blank">
                  <el-button>添加地址</el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div> 
        <div class="el-step is-vertical">
          <div class="el-step__head is-finish">
            <div class="el-step__line" style="margin-right: 0px;">
              <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
            </div>
            <div class="el-step__icon is-text">
              <div class="el-step__icon-inner">2</div>
            </div>
          </div>
          <div class="el-step__main">
            <div class="el-step__title is-finish">收件人</div>
            <div class="el-step__description is-finish">
              <div style="margin:10px 0 30px 40px">
                <el-select v-model="reachAddrId" placeholder="请选择地址">
                  <el-option
                    v-for="item in addressReach"
                    :key="item.id"
                    :label="item.englishName"
                    :value="item.reachAddrId">
                    {{ item.englishName }} {{ item.mobile }}
                  </el-option>
                </el-select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <router-link :to="{name: 'user-address'}" target="_blank">
                  <el-button>添加地址</el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div> 
        <div class="el-step is-vertical">
          <div class="el-step__head is-finish">
            <div class="el-step__line" style="margin-right: 0px;">
              <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
            </div>
            <div class="el-step__icon is-text">
              <div class="el-step__icon-inner">3</div>
            </div>
          </div>
          <div class="el-step__main">
            <div class="el-step__title is-finish">完善包裹信息</div>
            <div class="el-step__description is-finish" style="margin:10px 0 40px 0px">
              <div>
                包裹 1
                <el-form :inline="true" :model="mail" class="demo-form-inline">
                  <el-form-item label="重量">
                    <el-input v-model="mail.weight" style="width: 150px;">
                      <template slot="append">KG</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="长">
                    <el-input v-model="mail.packageCd" style="width: 150px;"><template slot="append">CM </template></el-input>
                  </el-form-item>
                  <el-form-item label="宽">
                    <el-input v-model="mail.packageWidth" style="width: 150px;"><template slot="append">CM </template></el-input>
                  </el-form-item>
                  <el-form-item label="高">
                    <el-input v-model="mail.packageHeigth" style="width: 150px;"><template slot="append">CM </template></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <el-row>
                   <el-col :span="1">.</el-col>
                   <el-col :span="6">
                     物品种类
                   </el-col>
                   <el-col :span="4">
                     单价/件
                   </el-col>
                   <el-col :span="4">
                     数量
                   </el-col>
                   <el-col :span="5">
                     物品描述
                   </el-col>
                </el-row>
                <el-row v-for="(item, index) in products" :key="index">
                   <el-col :span="1">
                     <div style="line-height: 30px;">
                     {{ index + 1}}
                     </div>
                   </el-col>
                   <el-col :span="6">
                    <el-select v-model="item.productId" placeholder="请选择">
                      <el-option
                        v-for="item in mailProduct"
                        :key="item.productId"
                        :label="item.productNameCn"
                        :value="item.productId">
                      </el-option>
                    </el-select>
                   </el-col>
                   <el-col :span="4">
                    <el-input placeholder="" style="width:100px;" v-model="item.productPrice">
                      <template slot="prepend">$</template>
                    </el-input>
                   </el-col>
                   <el-col :span="4">
                      <el-input placeholder="" type="number" style="width:100px;" v-model="item.productQty">
                      </el-input>
                   </el-col>
                   <el-col :span="5">
                     <el-input placeholder="" type="number" style="width:150px;" v-model="item.desc">
                      </el-input>
                   </el-col>
                   <el-col :span="2">
                     <el-button type="text" @click="onAddProuct">添加</el-button>
                   </el-col>
                   <el-col :span="2">
                     <el-button type="text" @click="onDelProuct(index)">删除</el-button>
                   </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
        <div class="el-step is-vertical">
          <div class="el-step__head is-finish">
            <div class="el-step__line" style="margin-right: 0px;">
              <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
            </div>
            <div class="el-step__icon is-text">
              <div class="el-step__icon-inner">4</div>
            </div>
          </div>
          <div class="el-step__main">
            <div class="el-step__title is-finish"></div>
            <div class="el-step__description is-finish">
              <el-button type="primary" @click="onSubmit">确定并提交订单</el-button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as API from '@/store/api'
  import AddressBox from '@/components/address'
  import { mapState } from 'vuex'
  export default {
    name: 'mail-step-3',
    computed: {
      ...mapState({
        mail: state => state.mail.info
      })
    },
    data () {
      return {
        form: {},
        acticeAddressFrom: {},
        fromAddrId: '',
        addressFrom: [],
        activeAddressReach: {},
        reachAddrId: '',
        addressReach: [],
        mailProduct: [],
        products: [
          {productId: '', productPrice: '', productQty: ''}
        ]
      }
    },
    mounted () {
      this.$store.commit('SET_STEP', {step: 4})
      this.loadAddressFrom()
      this.loadAddressReach()
      this.loadMailProduct()
    },
    methods: {
      onSubmit () {
        const params = {
          ...this.mail,
          fromAddrId: this.fromAddrId,
          reachAddrId: this.reachAddrId,
          orderDetials: this.products,
          feeType: 1
        }
        API.orderCreate(params).then(res => {
          if (res.body.status === 'success') {
            this.$router.push({name: 'step-5', query: {id: res.body.data}})
          } else {
            throw new Error(res.body.message)
          }
        })
        .catch(err => {
          this.$message('添加订单失败：' + err.message)
        })
      },
      onAddProuct () {
        this.products.push({productId: '', productPrice: '', productQty: ''})
      },
      onDelProuct (index) {
        this.products.splice(index, 1)
      },
      loadAddressFrom () {
        API.addressFromList().then(res => {
          this.addressFrom = res.body.page.items
        })
      },
      loadAddressReach () {
        API.addressReachList().then(res => {
          this.addressReach = res.body.page.items
        })
      },
      loadMailProduct () {
        API.quoteProduct().then(res => {
          this.mailProduct = res.body.data
        })
      }
    },
    components: {
      AddressBox
    }
  }
</script>

