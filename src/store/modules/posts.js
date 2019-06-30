/**
 * That data is used to show posts that belong someone
 * Example data is below
 */

import theMovieDb from '@/service/theMovieDb'

const state = {
  items: [
    {
      id: 1,
      photo: {
        thumb: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
        large: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
      },
      amount: {
        comment: "12k",
        like: "5k"
      },
      comments: [

      ]
    },
    {
      id: 2,
      photo: {
        thumb: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
        large: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
      },
      amount: {
        comment: "22k",
        like: "3k"
      },
      comments: [

      ]
    },
    {
      id: 2,
      photo: {
        thumb: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
        large: "https://fakeimg.pl/500x500/?text=Photo&font=lobster",
      },
      amount: {
        comment: "22k",
        like: "3k"
      },
      comments: [

      ]
    }
  ]
}

const mutations = {
  clearList(state, payload) {
    state.items = []
  },
  addNewPostLists(state, payload) {
    state.items = payload.posts
  }
}

const actions = {
  fetchPosts(context, payload) {
    let userId = payload.id

    theMovieDb.people.getImages({ id: userId }, success => {
      let response = JSON.parse(success)
      console.log("response: ", response)
      let posts = response.profiles.map((item, index) => {
        return {
          id: index + 1,
          photo: {
            thumb: theMovieDb.common.images_uri + "w500" + item.file_path,
            large: theMovieDb.common.images_uri + "w780" + item.file_path,
          },
          amount: {
            comment: item.vote_count,
            like: item.vote_average
          },
          comments: [

          ]
        }
      })


      context.commit("clearList")
      context.commit("addNewPostLists", { posts })


    }, fail => {

    })

    console.log("userr: ", userId)
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state
}