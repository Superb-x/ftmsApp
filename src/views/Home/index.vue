<template>
  <div id="home" v-cloak>
    <div class="toolbar">
      <div class="left">{{weather.city}}</div>
      <div class="center">{{weather.wearthimg}}</div>
      <div class="right message">
        <span class="badge" v-if="hasinfo"></span>
      </div>
    </div>
    <Banner :bannerList="banner"></Banner>
    <div class="new-banner">
      <b class="news icon-inform">新闻资讯</b>
      <router-link to="" class="link">{{msg}}</router-link>
    </div>
    <div class="navi">
      <ul>
        <router-link v-for="item in items" v-bind:to="item.path" :key="item.id" class="link">
          <li>
            <span :style="item.bg"><img :src="item.url" alt=""></span>
            {{item.name}}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="gap"></div>
    <div class="my-app">
      <span class="float-left">我的应用</span>
      <span class="float-right">管理></span>
    </div>
    <div class="panel">
      <div class="left">

      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import { getBanner, getWeather, getInfoStatus } from '@/api/home'
  export default {
    name: 'Home',
    data () {
      return {
        msg: '原一汽丰田服务APP积分划转通知',
        hasinfo: false,
        items: [
          {
            name: '车主福利',
            url: 'static/images/home-icon/home-icon-welfare.png',
            bg: 'background: #34b7f7',
            path: '/panel/welfare'
          },
          {
            name: '促销活动',
            url: 'static/images/home-icon/home-icon-event.png',
            bg: 'background: #f0dd3a',
            path: '/panel/activity'
          },
          {
            name: '金融产品',
            url: 'static/images/home-icon/home-icon-finance.png',
            bg: 'background: #ff6966',
            path: '/panel/finance'
          },
          {
            name: '品牌宣传',
            url: 'static/images/home-icon/home-icon-news.png',
            bg: 'background: #65c730',
            path: '/panel/brand'
          }
        ],
        banner: [],
        weather: {
          city: '',
          wearthimg: ''
        }
      }
    },
    components: {
      Banner
    },
    methods: {
      fetchBanner () {
        getBanner().then(res => {
          this.banner = res.data.data.toplist
          this.msg = res.data.data.brand[0].title
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      fetchWeather () {
        getWeather().then(res => {
          this.weather.city = res.data.data.city
          this.weather.wearthimg = res.data.data.wearthimg
        })
      },
      getStatus () {
        getInfoStatus().then(res => {
          if (res.data.data.count >= 1) {
            this.hasinfo = true
          }
        })
      }
    },
    created () {
      this.fetchBanner()
      this.fetchWeather()
    }
  }
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
