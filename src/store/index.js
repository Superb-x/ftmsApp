/**
 * Created by near on 2017/3/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slide: 'slideLeft'
  },
  mutations: {
    right (state) {
      state.slide = 'slideRight'
    },
    left (state) {
      state.slide = 'slideLeft'
    }
  }
})

export default store
