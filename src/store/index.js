import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import timeline from './modules/timeline'
import suggestions_user from './modules/suggestions_user'
import stories_user from './modules/stories_user'
import explore_new_user from './modules/explore_new_user'
import explore from './modules/explore'
import auth from './modules/auth'

export default new Vuex.Store({
  modules: {
    explore,
    explore_new_user,
    timeline,
    suggestions_user,
    stories_user,
    auth
  }
})
