const state = {
  /**
   * This variable is used when app first opening
   * App icon is showed when that is loading
   */
  loading: true,

  /**
   * When this variables is true that means everything is normal when app first opening. (Server connectins, etc..)
   */
  showApp: false,

  /**
   * When page loading because of API connection It will be true. When API connection finished, It will turn on to true and page will be displayed
   */
  showPage: false
}


const mutations = {
  updateAppStatus(state, payload) {
    state.showApp = payload.showApp
  },
  updatePageStatus(state, payload) {
    state.showPage = payload.pageVisible
  }
}

const actions = {
  appStarted({ dispatch, commit }) {


    dispatch('auth/fetchAuth', {}, { root: true })
      .then(() => {

        return dispatch('stories/fetchStories', {}, { root: true })

      }).then(() => {

        return dispatch('suggestions/fetchSuggestions', {}, { root: true })

      }).then((data) => {

        commit('updateAppStatus', { showApp: true })

      }).catch(error => {

        //TODO

      })



  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
}