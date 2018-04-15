<template>
  <div>
    <h3> {{ $t('mail.xzgjwl') }} </h3>
    <mail-count />
  </div>
</template>

<script>
  import MailCount from '@/components/mail'
  export default {
    name: 'mail-step-1',
    mounted () {
      this.$store.commit('SET_STEP', {step: 1})
    },
    components: {
      MailCount
    }
  }
</script>

<style >
  
</style>


