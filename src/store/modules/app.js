/**
 * Created by near on 2017/7/24.
 */
const app = {
  state: {
    slide: 'slideLeft',
    bannerCached: false
  },
  mutations: {
    TOGGLE_SLIDE: state => {
      if (state.slide === 'slideLeft') {
        state.slide = 'slideRight'
      } else {
        state.slide = 'slideLeft'
      }
    },
    BANNER_CACHED: state => {
      if (state.bannerCached === true) {
        state.bannerCached = false
      } else {
        state.bannerCached = true
      }
    }
  },
  actions: {
    ToggleDirect: ({ commit }) => {
      commit('TOGGLE_SLIDE')
    },
    ToggleCached: ({ commit }) => {
      commit('BANNER_CACHED')
    }
  }
}

export default app
