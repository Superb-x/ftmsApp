<template>
  <div id="home">
    <Banner></Banner>
    <div class="new-banner">
      <b class="news icon-inform">新闻资讯</b>
      <span>{{msg}}</span>
    </div>
    <div class="navi">
      <ul>
        <li v-for="item in items">
          <span :style="item.bg"><img :src="item.url" alt=""></span>
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="gap"></div>
    <div class="my-app">
      <span class="float-left">我的应用</span>
      <span class="float-right">管理></span>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  export default {
    name: 'home',
    data () {
      return {
        msg: '原一汽丰田服务APP积分划转通知',
        items: [
          {
            name: '车主福利',
            url: 'static/images/home-icon/home-icon-welfare.png',
            bg: 'background: #34b7f7'
          },
          {
            name: '促销活动',
            url: 'static/images/home-icon/home-icon-event.png',
            bg: 'background: #f0dd3a'
          },
          {
            name: '金融产品',
            url: 'static/images/home-icon/home-icon-finance.png',
            bg: 'background: #ff6966'
          },
          {
            name: '品牌宣传',
            url: 'static/images/home-icon/home-icon-news.png',
            bg: 'background: #65c730'
          }
        ]
      }
    },
    components: {
      Banner
    },
    methods: {
      sum: function () {
        console.log(this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-banner {
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.20rem;
    text-align: left;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ccc;
  }
  .news {
    padding-right: 0.3rem;
    background: no-repeat right center;
    background-size: 0.3rem 0.3rem;
  }
  .icon-inform {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAnJJREFUWIXt1zmIFFkcx/FPr8cYqOiyqKCCmywYiGYesKgMmik6iCK7gSY1Lqt4RKLLgqCGgkfgdCCCMIg3eKCgq5gMCAYzgZniIguK94HHqjMG7zWWw3RVtd12Yn+heK/+Vf//+9Wr9/7/Klq0aNHim1LKutjV1VVrvPm4iDaswKk8hyRJgpDS0FJ+qFVBBrtxDaOEB5/UiKDDGxEEPZiDD3gkiHvTiMD1zuA43BfEvRde7bl6RaWpR+AqPMZE3MFI9GNWjt9P6MPaIoMUecULMSEODh/Rgd/i+RksT93/ISdeO2bgEO7iatbNeTPYjX9wFMficTIlbtsgcUU4jYOxf7lcLmdqyJvB1bHtTdlKeI31uFmjOPgff2CM8KC38fPXCoQB+euqCPuENFTJjb8LS2VauVxux5WhnIpsksxkXpDJ2IATwmaqsDm2e6o5NjJRZ/EcN4SHvZSyV0rV9GqOzRL4CrOF5bJg0Lj9GFHNsVkCK7yM7diU7W2WQ7MFjo7tq5StLcuhWQJH4kgc75Yvk/kwIfkPSbMEjhfSCixO2ZfE9m41x6J5sF4e4LJQ1v5L2Q/H9u9qjkUElnBcEFoSZv0N1sivu2kWDTrfhh/xLEmS7s7Ozq8S2IO5wtfxYFZiGS7UILLCn9gV+5lVKk/gPKECTBRmsD8e7fgV57EXm2oQ14EDsb8uSZJ/6xEI+4ew7cBObMdGzBQ+y8hIupFePEXZ50pSlXp28V/CT9I7oTo8iva+HL/bwtrbWmSQev9Jrgs/SfcwBU/wsM6YX9CoPDgVZ4V890u0ZVaIojQyUS/FFqEqDOBFA2O3aNGixXfLJ1IBb83zfoUcAAAAAElFTkSuQmCC');
  }
  ul {
    font-size: 0;
    width: 100%;
    height: 1.35rem;
    margin-top: 0.1rem;
    li {
      display: inline-block;
      width: 25%;
      height: 100%;
      font-size: 0.20rem;
      text-align: center;
      span {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        margin-left: 0.4rem;
        margin-bottom: 0.08rem;
        background: #fff;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .gap {
    width: 100%;
    height: 0.2rem;
    border-top: 1px solid rgba(207, 207, 207, 0.95);;
    border-bottom: 1px solid rgba(207, 207, 207, 0.95);;
    background: #f3f3f3;
  }
  .my-app {
    font-size: 0.20rem;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ccc;
    .float-left {
      float: left;
    }
    .float-right {
      float: right;
    }
  }
</style>
