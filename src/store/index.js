import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './modules/posts'
import suggestions_user from './modules/suggestions_user'
import stories_user from './modules/stories_user'
import auth from './modules/auth'

export default new Vuex.Store({
  modules: {
    posts,
    suggestions_user,
    stories_user,
    auth
  }
})
