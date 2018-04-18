<template>
  <div>
    <div class="area1 flex" style="margin-bottom:20px">
      <div class="banner">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img height="300px" width="100%" src="https://img12.360buyimg.com/da/jfs/t5182/69/462910155/142359/66551a05/58ffffd8N892ce4a8.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mail-count">
        <index-mail />
      </div> 
    </div>
    <!-- <div class="area2">
      <div class="area2-item">
        <img src="../../assets/images/index-1.png" alt="">
        <span>{{ $t('index.ddgz') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-2.png" alt="">
        <span>{{ $t('index.jgfa') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-3.png" alt="">
        <span>{{ $t('index.zy') }}</span>
      </div>
      <div class="area2-item">
        <img src="../../assets/images/index-4.png" alt="">
        <span>{{ $t('index.yz') }}</span>
      </div>
    </div> -->
    <div class="area3" style="margin-bottom:20px">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="title">
            <h4>
              产品列表
            </h4>
          </div>
          <el-row>
            <el-col :span="6" v-for="(item, index) in product" :key="item.id" :offset="index > 0 ? 2 : 0">
              <router-link :to="{name: 'product-content', params: {id: item.id}}">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.imgUrl" class="image">
                  <div style="padding: 14px;">
                    <span>{{ item.productTitle }}</span>
                  </div>
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <div class="title">
            <h4>
              {{ $t('index.wlzx') }}
            </h4>
          </div>
          <ul class="li-text">
            <li v-for="item in cmsList" :key="item.id">
              <router-link  :to="{name: 'news-content', params: {id: item.id}}">
                <time style="float: right">{{ item.createTime | dateFormat('yyyy-MM-dd') }}</time>  
                {{ item.title | slice }}
              </router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="layer1" style="margin-bottom:20px">
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="layer-left">
            <h2 style="margin-bottom: 20px;">我们的优势</h2>
            <el-tag style="margin-bottom: 10px;">全英最大</el-tag>
            <el-tag style="margin-bottom: 10px;">邮费最低</el-tag>
            <el-tag style="margin-bottom: 10px;">全程追踪</el-tag>
          </div>
        </el-col>
        <el-col :span="19">
          <ul class="superior bg-fff">
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-1.png">
                    <span>实体店服务</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-2.png">
                    <span>文件特快专递</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-3.png">
                    <span>座椅专线</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-8.png">
                    <span>奶粉包税</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-5.png">
                    <span>行李专线</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-6.png">
                    <span>批量下单</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-7.png">
                    <span>长期合作</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-4.png">
                    <span>海淘转运</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                  <img src="../../assets/images/superior-9.png">
                    <span>小包裹邮寄</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/images/superior-10.png">
                    <span>运费报价</span>
                </a>
            </li>
        </ul>
        </el-col>
      </el-row>
    </div>
    <div class="layer2" style="margin-bottom:20px">
      <el-row :gutter="20">
        <el-col  :span="5">
          <div class="layer-left">
              <h2>实体店</h2>
              <a class="a-label">打包</a>
              <a class="a-label">贴单</a>
              <a class="a-label">下单</a>
          </div>
        </el-col>
        <el-col  :span="19">
          <div class="layer-right bg-fff" style="padding: 20px; height:242px;">
            <p>英超实体店是被授权加盟英国物流，可以给英超物流注册客户提供本地线下附加服务的实体服务点。（加盟请联系：<a href="mailto:sales@51parcel.com">sales@51parcel.com</a>）
            </p>
            <ul class="wb-coupons">
                <li>提供代打包、贴单、取件等增值服务、无需再操心。</li>
                <li>无需网上下单，直接前往实体店即可邮寄，获得单号后可全程追踪。</li>
                <li>本地司机熟悉线路，可协商上门取件时间，不必在家苦等一天。</li>
            </ul>
          </div>  
        </el-col>
      </el-row>
    </div>
    <div class="layer3" style="margin-bottom:20px">
      <el-row :gutter="20">
        <el-col  :span="5">
          <div class="layer-left">
              <h2>文件特快</h2>
              <a class="a-label">急速转运</a>
              <a class="a-label">免费保险</a>
              <a class="a-label">安全可靠</a>
          </div>
        </el-col>
        <el-col  :span="19">
          <div class="layer-right bg-fff" style="padding: 20px; height:242px;">
            <ul class="wb-coupons">
                <li>7*24小时下单，即时支付，即时出单。</li>
                <li>最稳定的上门取件服务。</li>
                <li>文件重量必须2公斤以内。</li>
                <li>国际英超选用商业快递（非邮政线路），航班稳定，延迟可赔付。</li>
            </ul>
          </div>  
        </el-col>
      </el-row>
    </div>
    <div class="layer2">
       <div class="title">
        <h4>
          {{ $t('index.hzhb') }}
        </h4>
      </div>
      <div class="area4-bd">
        <img src="../../assets/images/hb1.png" alt="">
        <img src="../../assets/images/hb2.png" alt="">
        <img src="../../assets/images/hb3.png" alt="">
        <img src="../../assets/images/hb4.png" alt="">
        <img src="../../assets/images/hb5.png" alt="">
        <img src="../../assets/images/hb6.png" alt="">
        <img src="../../assets/images/hb7.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import IndexMail from '@/components/mail'
import * as API from '@/store/api'
import { dateFormat } from '@/util/common'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cmsList: [],
      product: []
    }
  },
  mounted () {
    this.getCms()
    this.getProductList()
  },
  methods: {
    getCms () {
      API.cmsList().then(res => {
        this.cmsList = res.body.page.items.slice(0, 8)
      })
    },
    getProductList () {
      API.productList().then(res => {
        this.product = res.body.page.items.slice(0, 4)
      })
    }
  },
  filters: {
    dateFormat,
    slice (str) {
      if (str) {
        return str.slice(0, 10) + '...'
      } else {
        return ''
      }
    }
  },
  components: {
    IndexMail
  }
}
</script>

<style scoped>
  .area1 .banner {
    flex: 1;
    background: #fff;
  }
  .area1 .mail-count {
    width: 350px;
    height: 300px;
    background: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    margin-left: 20px;
  }
  .area2 {
    display: flex;
  }
  .area2-item {
    flex: 1;
    padding: 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .area2-item img {
    margin-bottom: 20px;
  }
  .area2-item span {
    font-size: 18px;
  }
  .area4-bd {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 10px;
  }
  .area4-bd img {
    border:1px solid #999
  }

  .layer-left {
    display: flex;
    /* border:1px solid #ddd; */
    padding: 50px 0;
    background: #fff;
    border-top: 4px solid #46b4ed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .layer1 {
}

.layer1 .layer-left {
    border-color: #46b4ed;
}

.layer2 {
}

.layer2 .layer-left {
    border-color:#f7941d;
}

.layer3 {
}

.layer3 .layer-left {
    border-color:#83c460;
}

.layer4 {
}

.layer4 .layer-left {
    border-color:#ec7776;
}

.layer5 {
}

.layer5 .layer-left {
    border-color:#f7c13a;
}
.layer5 .layer-left h2{
    font-size:24px;
}
.layer6 {
}

.layer6 .layer-left {
    border-color:#7689ce;
}

.layer7 {
}

.layer7 .layer-left {
    border-color:#46b4ed;
}

.a-label {
    display: block;
    width: 92px;
    height: 25px;
    font-size: 15px;
    text-align: center;
    border-radius: 2px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 10px;
}
.a-label:hover{
    color: #fff;
    text-decoration:none;
}
.layer1 .a-label {
    background-color: #6ec5f3;
}

.layer2 .a-label {
    background-color: #f8b25f;
}

.layer3 .a-label {
    background-color: #8ad95f;
}

.layer4 .a-label {
    background-color: #ed9797;
}
.layer5 .a-label {
    background-color: #facd5c;
}
.layer6 .a-label {
    background-color: #8ea1e8;
}
.layer7 .a-label {
    background-color: #6ec5f3;
}

.superior {
    margin:0;
    padding:0;
    list-style: none;
    overflow: hidden;
}
.superior li{
    float:left;
    display:table-cell;
    width: 20%;
    margin: -1px 0 0 -1px;
    border-top: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    text-align: center;
    height: 143px;
    padding-top: 25px;
}
.superior li a{
    text-decoration:none;
}
.superior li span{
    display:block;
    color:#333;
    margin-top: 5px;
}
.bg-fff{
  background: #fff;
}
</style>
