const state = {
  step: 1,
  info: {
  }
}

const mutations = {
  SET_STEP (state, { step }) {
    state.step = step
  },
  SET_QD_INFO (state, data) {
    state.info = data
  }
}

export default {
  state,
  mutations
}
