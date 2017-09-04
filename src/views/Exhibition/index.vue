<template>
  <div id="exhibition">
    <keep-alive>
      <Banner :bannerList="banner"></Banner>
    </keep-alive>
    <nav>
      <ul>
        <li v-for="(model,index) in vehicles" :class="{active: index == cur}" @click="focused(index)">
          {{model.name}}
        </li>
      </ul>
    </nav>
    <div class="list">
      <template v-for="(model, index) in vehicles">
        <ul :class="{active: index == cur}">
            <li v-for="car in model.childs">
              <router-link v-bind:to="car.name">
                <img :src="car.thumb" alt="">
                <p>{{car.name}}</p>
                <p>{{car.price}}</p>
              </router-link>
            </li>
        </ul>
      </template>
    </div>
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
          this.vehicles[3].name = '双擎'
        })
      },
      focused (i) {
        this.cur = i
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
