<template>
  <div id="apphome">
    <transition :name="direction" mode="out-in">
      <router-view></router-view>
    </transition>
    <Navi></Navi>
  </div>
</template>

<script>
import Navi from './components/navi'
export default {
  name: 'apphome',
  data () {
    return {
      msg: '测试'
    }
  },
  components: {
    Navi
  },
  methods: {

  },
  computed: {
    direction () {
      return this.$store.state.slide
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.slideLeft-enter-active {
  animation: zoomIn .3s;
}
.slideRight-enter-active {
  animation: zoomIn .3s;
}
.slideLeft-leave-active {
  animation: zoomOut .3s;
}
.slideRight-leave-active {
  animation: zoomOut .3s;
}
@keyframes left-in {
  from {
    transform: translate3D(-100%, 0, 0)
  }
  to {
    transform: translate3D(0, 0, 0)
  }
}
@keyframes right-in {
  from {
    transform: translate3D(100%, 0, 0)
  }
  to {
    transform: translate3D(0, 0, 0)
  }
}
@-webkit-keyframes zoomOut{

  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes zoomIn{

  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}
</style>
