import { randomPage, getFakeImage } from '@/helpers'
import theMovieDb from '@/service/theMovieDb'

const state = {
  items: []
}

const mutations = {
  updateAllSuggestions(state, payload) {
    state.items = []
    state.items = payload.list
  }
}

const getters = {
  lastUsers(state) {

    let suggestions = state.items.map(item => {
      return {
        id: item.id,
        name: item.name,
        desc: '10 hours ago',
        photo: item.profile_path ? theMovieDb.common.images_uri + "w154" + item.profile_path : getFakeImage(),
      }
    })

    return suggestions.slice(0, 3)


  }
}

const actions = {
  fetchSuggestions(context) {

    return new Promise((resolve, reject) => {
      theMovieDb.people.getPopular({ page: randomPage() }, success => {

        let response = JSON.parse(success)
        context.commit('updateAllSuggestions', { list: response.results })

        resolve()

      }, fail => {

        reject("Suggestions coulnd't take")

      })
    })
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}