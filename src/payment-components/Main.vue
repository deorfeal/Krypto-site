<script>

import Header from '../components/Header.vue'
import Payment from '../payment-components/Payment.vue'


export default {
  name: 'Main',
  components: {
    Header, Payment
  },
  data() {
    return {

    }
  }
}

</script>

<template>
  <div class="big-wrapper">
  <Header/>
  <Payment/>
</div>
</template>

<style lang="scss">
    @import '../assets/scss/style.scss'
</style>