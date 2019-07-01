import theMovieDb from '@/service/theMovieDb'
import { randomPage, getFakeImage, getFakeDateTime, randomNumber } from '@/helpers'

const state = {
  items: []
}

const mutations = {
  updateAllPosts(state, payload) {
    state.items = []
    state.items = payload.list
  }
}

const getters = {
  fetchPosts(state) {
    return state.items.map(item => {

      let comments = item.known_for.map(item => {
        return {
          name: item.original_title,
          comment: item.overview
        }
      })

      return {
        user: {
          id: item.id,
          name: item.name,
          photo: item.profile_path ? theMovieDb.common.images_uri + "w92" + item.profile_path : getFakeImage(),
          comment: item.known_for[0].original_title + ': ' + item.known_for[0].overview,
          desc: randomNumber() > 2 ? item.known_for[0].original_title : ""
        },
        post: {
          photo: item.profile_path ? theMovieDb.common.images_uri + "original" + item.profile_path : getFakeImage(),
          date: getFakeDateTime(),
          viewCount: randomNumber(1000),
          count: randomNumber(1000),
          comments
        }
      }
    })
  }
}

const actions = {
  fetchPopularPeople(context) {

    theMovieDb.people.getPopular({ page: randomPage() }, success => {

      let response = JSON.parse(success)
      context.commit('updateAllPosts', { list: response.results })

    }, fail => {

    })
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state
}


/**
 * Timeline post data structure
 */

// {
//   user: {
//     id: "123",
//     name: "HULK",
//     photo: "https://fakeimg.pl/200x200/?text=Photo&font=lobster",
//     comment: "Hi I am HULK"
//   },
//   post: {
//     photo: "https://fakeimg.pl/1000x1000/?text=Photo&font=lobster",
//     date: "2 hours ago",
//     viewCount: 200,
//     comments: {
//       list: [
//         {
//           name: "Spider-Man",
//           comment: "I am here, too"
//         },
//         {
//           name: "Ant-Man",
//           comment: "I am here, too"
//         }
//       ],
//       count: 2
//     }
//   }
// }