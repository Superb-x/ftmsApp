<template>
  <div id="exhibition">
    <Banner></Banner>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  export default {
    name: 'exhibition',
    data () {
      return {
        msg: '欢迎来到车辆展厅'
      }
    },
    components: {
      Banner
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 0.16rem;
  }
</style>
