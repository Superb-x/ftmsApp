<template>
  <div id="exhibition">
    <Banner :bannerList="banner"></Banner>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import axios from 'axios'
  export default {
    name: 'exhibition',
    data () {
      return {
        msg: '欢迎来到车辆展厅',
        banner: []
      }
    },
    components: {
      Banner
    },
    created () {
      let that = this
      let instance = axios.create({
        baseURL: 'http://union.ftms.chenghx.com',
        timeout: 10000
      })
      instance.get('/api.php/v1/News/indexTopList')
        .then(function (res) {
          console.log(res.data.data.toplist)
          that.banner = res.data.data.toplist
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 0.16rem;
  }
</style>
