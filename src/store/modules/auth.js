import theMovieDb from '@/service/theMovieDb'

const state = {
  auth: {
    id: 6193,
    name: "grafikri",
    full_name: "Serhan",
    photo: "https://fakeimg.pl/200x200/?text=Photo&font=lobster",
    posts: {
      count: 2,
      list: []
    },
    followers: {
      count: 5,
      list: []
    },
    follow: {
      count: 10,
      list: []
    }
  }
}

const mutations = {
  updateAuth(state, payload) {
    state.auth = { ...state.auth, ...payload.user }

  }
}

const getters = {
  auth(state) {
    return state.auth
  }
}



const actions = {
  fetchAuth(context, payload) {

    return new Promise((resolve, reject) => {

      let userId = 6193 // Leonardo DiCaprio ID

      theMovieDb.people.getById({ id: userId }, success => {
        let response = JSON.parse(success)
        let user = {
          id: response.id,
          name: response.name,
          full_name: response.name,
          photo: theMovieDb.common.images_uri + "w154" + response.profile_path,
        }
        context.commit("updateAuth", { user })
        resolve()

      }, fail => {

        reject("Auth information couldn't take")

      })

    })

  }
}


export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}