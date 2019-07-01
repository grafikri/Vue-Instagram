const state = {
  /**
   * This variable is used when app first opening
   * App icon is showed when that is loading
   */
  loading: true,

  /**
   * When this variables is true that means everything is normal when app first opening. (Server connectins, etc..)
   */
  showApp: false
}


const mutations = {
  updateAppLoadingStatus(state, payload) {
    state.loading = payload.loading
    state.showApp = payload.showApp
  }
}

export default {
  namespaced: true,
  mutations,
  state,
}