import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import timeline from './modules/timeline'
import posts from './modules/posts'
import saved from './modules/saved'
import user from './modules/user'
import suggestions_user from './modules/suggestions_user'
import stories from './modules/stories'
import explore_new_user from './modules/explore_new_user'
import explore from './modules/explore'
import auth from './modules/auth'

export default new Vuex.Store({
  modules: {
    posts,
    saved,
    user,
    explore,
    explore_new_user,
    timeline,
    suggestions_user,
    stories,
    auth
  }
})
