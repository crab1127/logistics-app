<template>
  <div>
    订单创建成功： 订单号是：{{ id }}
  </div>
</template>

<script>
export default {
  name: 'mail-step-5',
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.id
  }
}
</script>

