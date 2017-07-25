<template>
  <swiper :options="swiperOption" ref="mySwiper" class="cont">
    <!-- slides -->
    <template v-for="item in bannerList">
      <swiper-slide><img :src="item.thumb" alt=""></swiper-slide>
    </template>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination" style="bottom: -10px"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: {
      bannerList: {
        type: Array,
        default: [
            {thumb: 'static/banner.jpg'}, {thumb: 'static/banner2.jpg'}, {thumb: 'static/banner3.jpg'}]
      }
    },
    data () {
      return {
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop: true,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .cont {
    width: 100%;
    img {
      width: 100%;
    }
    .swiper-wrapper {
      font-size: 0;
    }
    .swiper-pagination-bullet {
      width: 0.15rem;
      height: 0.15rem;
      background: #fff;
    }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -10px;
  }
  }
</style>
