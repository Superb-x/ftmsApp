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
      return this.$store.state.app.slide
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/index.scss";
</style>
