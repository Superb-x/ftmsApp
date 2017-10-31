<template>
  <h2 class="title">{{msg}}</h2>
</template>

<script>
  export default {
    name: 'Car',
    data () {
      return {
        msg: '我的爱车'
      }
    }
  }
</script>

<style lang="scss">
  @import "car";
</style>
