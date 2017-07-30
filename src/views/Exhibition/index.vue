<template>
  <div id="exhibition">
    <keep-alive>
      <Banner :bannerList="banner"></Banner>
    </keep-alive>
    <nav>
      <ul>
        <li v-for="model in vehicles" :class="{active: index == cur}">
          {{model.name}}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import { getBrand } from 'api/exhibition'
  export default {
    name: 'exhibition',
    data () {
      return {
        msg: '欢迎来到车辆展厅',
        banner: [],
        vehicles: [],
        cur: 0
      }
    },
    components: {
      Banner
    },
    methods: {
      fetchBrand () {
        getBrand().then(res => {
          this.banner = res.data.data.activt
          this.vehicles = res.data.data.vehicle
        })
      }
    },
    created () {
      this.fetchBrand()
    }
  }
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
