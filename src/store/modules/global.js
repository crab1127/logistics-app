const state = {
  title: ''
}

const mutations = {
  SET_TITLE (state, { title }) {
    if (title) {
      document.title = title
      state.title = title
    }
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
