/**
 * Created by near on 2017/7/24.
 */
const app = {
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
}

export default app
