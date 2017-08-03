<template>
  <div id="home" v-cloak>
    <div class="toolbar">
      <div class="left">{{weather.city}}</div>
      <div class="center">{{weather.wearthimg}}</div>
      <div class="right message">
        <span class="badge" v-if="hasinfo"></span>
      </div>
    </div>
    <keep-alive>
      <Banner :bannerList="banner"></Banner>
    </keep-alive>
    <div class="new-banner">
      <b class="news icon-inform">新闻资讯</b>
      <router-link to="" class="link">
        {{msg}}
      </router-link>
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
        <div class="left backconfig" :style="backgroundObject.img1">
          <router-link to="" class="item s-item">
            <p>{{services[0].title}}</p>
            <p>{{services[0].sortname}}</p>
          </router-link>
        </div>
        <div class="right">
          <div class="r-top" :style="backgroundObject.img3">
            <router-link to="" class="item s-item-1">
              <p>{{services[1].title}}</p>
              <p>{{services[1].sortname}}</p>
            </router-link>
          </div>
          <div class="row">
            <div class="inline-block item-2 shortbox" :style="backgroundObject.img4">
              <router-link to="" class="item s-item-2">
                <p>{{services[2].title}}</p>
                <p>{{services[2].sortname}}</p>
              </router-link>
            </div>
            <div class="inline-block item-3 shortbox" :style="backgroundObject.img8">
              <router-link to="" class="item s-item-3">
                <p>{{services[3].title}}</p>
                <p>{{services[3].sortname}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import { getBanner, getWeather, getInfoStatus } from '@/api/home'
  import imgDate from './imageData'
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
        services: [
          {'title': '预约保养', 'sortname': '在线预约更方便'},
          {'title': '预约保养', 'sortname': '在线预约更方便'},
          {'title': '预约保养', 'sortname': '在线预约更方便'},
          {'title': '预约保养', 'sortname': '在线预约更方便'}
        ],
        weather: {
          city: '',
          wearthimg: ''
        },
        backgroundObject: imgDate
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
          this.services = res.data.data.button
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      fetchWeather () {
        getWeather().then(res => {
          this.weather.city = res.data.data.city
          this.weather.wearthimg = res.data.data.wearthimg
          this.$store.dispatch('ToggleCached')
        })
      },
      getStatus () {
        getInfoStatus('a168eeeb39ea822439b064865bc8711e').then(res => {
          if (res.data.data.count >= 1) {
            this.hasinfo = true
          }
        })
      }
    },
    created () {
      this.fetchBanner()
      this.fetchWeather()
      this.getStatus()
    }
  }
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
