/**
 * This module uses for anyuser profile's page
 */
import theMovieDb from '@/service/theMovieDb'

const state = {
  name: "",
  desc: "",
  avatar: "https://fakeimg.pl/200x200/?text=Photo&font=lobster",
  quantity: {
    posts: "32k",
    followers: "10k",
    followings: "5k"
  }
}

const mutations = {
  updateUser(state, payload) {
    Object.assign(state, payload.user)

  }
}

const actions = {
  fetchUser(context, payload) {

    return new Promise((resolve, reject) => {
      let userId = payload.id

      theMovieDb.people.getById({ id: userId }, success => {
        let response = JSON.parse(success)

        let user = {
          name: response.name,
          desc: response.biography,
          avatar: theMovieDb.common.images_uri + "w154" + response.profile_path,
          quantity: {
            posts: "32k",
            followers: "10k",
            followings: "5k"
          }
        }
        context.commit("updateUser", { user })
        resolve()

      }, fail => {
        reject("The User information coulnd't be get")
      })
    })

  }
}


export default {
  namespaced: true,
  actions,
  state,
  mutations
}