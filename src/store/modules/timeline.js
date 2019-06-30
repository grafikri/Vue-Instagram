import theMovieDb from '@/service/theMovieDb'
import { randomPage } from '@/helpers'

const state = []

const mutations = {
  addPosts(state, payload) {

    payload.forEach((item) => {
      state.push(item)
    })

  },
}

const actions = {
  fetchPopularPeople(context) {

    theMovieDb.people.getPopular({ page: randomPage() }, success => {

      let response = JSON.parse(success)

      let posts = response.results.map(item => {

        let user = {
          id: item.id,
          name: item.name,
          photo: theMovieDb.common.images_uri + "w92" + item.profile_path,
          comment: item.known_for[0].original_title + ': ' + item.known_for[0].overview
        }


        let post = {
          photo: theMovieDb.common.images_uri + "original" + item.profile_path,
          date: "date",
          viewCount: item.known_for.length,
          count: item.known_for.length,
          comments() {
            return item.known_for.map(item => {
              return {
                name: item.original_title,
                comment: item.overview
              }
            })
          }
        }

        return { user, post }
      })

      context.commit('addPosts', posts)

    }, fail => {

    })
  }
}

export default {
  namespaced: true,
  mutations,
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