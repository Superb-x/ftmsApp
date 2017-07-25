<template>
  <transition name="slideIn">
    <div class="panel">
      <header>
        <button @click="back()">
          <i class="back"></i>
        </button>
        <p class="title">{{title}}</p>
      </header>
      <div class="content">
        <h3>{{msg}}</h3>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Panel',
    data () {
      return {
        msg: '展示面板',
        title: '促销活动',
        types: {
          welfare: '车主福利',
          activity: '促销活动',
          finance: '金融产品',
          brand: '品牌宣传'
        }
      }
    },
    methods: {
      back () {
        this.$router.back()
      }
    },
    created () {
      console.log(this.$route.params.name)
      this.title = this.types[this.$route.params.name]
    }
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 0.8rem;
    position: relative;
    button {
      -webkit-appearance: none;
      background: none;
      outline: none;
      border: none;
      display: inline-block;
      position: absolute;
      top: 50%;
      margin-top: -0.3rem;
    }
    .title {
      width: 3rem;
      line-height: .8rem;
      color: #000;
      text-align: center;
      position: absolute;
      left: 50%;
      margin-left: -1.5rem;
      font-size: 0.3rem;
    }
    .back {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTI0LDMyLDM4LjIxLDQ1LjIxbC0yLDJMMjAsMzIsMzYuMjEsMTYuNzlsMiwyWiIgc3R5bGU9ImZpbGw6Z3JheTtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg==');
    }
  }

  .panel {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .slideIn-enter-active {
    animation: slideInRight .5s;
  }
  .slideOut-leave-active {
    animation: slideOutRight .5s;
  }
  @-webkit-keyframes slideInRight{

    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes slideOutRight{

    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
