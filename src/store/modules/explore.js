import theMovieDb from '@/service/theMovieDb'
import { randomNumber, getFakeImage, randomPage } from '@/helpers'


const state = {
  posts: [],
  users: []
}

const mutations = {
  updateAllPosts(state, payload) {
    state.posts = []
    state.posts = payload.list
  },
  updateAllUsers(state, payload) {
    state.users = []
    state.users = payload.list
  },
}

const getters = {
  fetchPosts(state) {
    return state.posts.map(item => {
      return {
        id: item.id,
        photo: item.profile_path ? theMovieDb.common.images_uri + "w500" + item.profile_path : getFakeImage(),
        commentCount: randomNumber(10) + "k",
        likeCount: randomNumber(300) + "k"
      }
    })
  },
  fetchUsers(state) {
    return state.users.map(item => {
      return {
        id: item.id,
        photo: item.profile_path ? theMovieDb.common.images_uri + "w92" + item.profile_path : getFakeImage(),
        name: item.name,
        desc: "Follows you"
      }
    })
  },
}

const actions = {
  fetchExplorePosts(context) {

    return new Promise((resolve, reject) => {

      theMovieDb.people.getPopular({ page: randomPage() }, success => {

        let response = JSON.parse(success)
        context.commit('updateAllPosts', { list: response.results })
        resolve()

      }, fail => {

        reject("The explore posts couldn't be fetched")

      })

    })

  },
  fetchExploreUsers(context) {

    return new Promise((resolve, reject) => {

      theMovieDb.people.getPopular({ page: randomPage() }, success => {

        let response = JSON.parse(success)
        context.commit('updateAllUsers', { list: response.results })
        resolve()

      }, fail => {

        reject("The explore users couldn't be fetched")

      })

    })

  },
}


export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}