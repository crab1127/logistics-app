<template>
  <div>
    简介
  </div>
</template>

<script>
  export default {
    name: 'mail-step-1',
    mounted () {
      this.$store.commit('SET_STEP', {step:4})
    }
  }
</script>

