import Cookies from 'js-cookie'

const state = {
  title: '',
  user: {},
  language: Cookies.get('language') || 'zh'
}

const mutations = {
  SET_TITLE (state, { title }) {
    if (title) {
      document.title = title
      state.title = title
    }
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  }

}

const actions = {
  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  }
}

export default {
  state,
  mutations,
  actions
}
