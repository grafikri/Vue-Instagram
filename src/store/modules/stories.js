import { randomPage, getFakeImage } from '@/helpers'
import theMovieDb from '@/service/theMovieDb'


const state = {
  items: [
    { name: 'Tony Stark', desc: '11 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster' }, { name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster' }, { name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster' }, { name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster' }, { name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster' }
  ]
}


const getters = {
  lastStories(state) {
    let items = state.items.map(item => {
      return {
        id: item.id,
        name: item.name,
        desc: '11 hours ago',
        photo: item.profile_path ? theMovieDb.common.images_uri + "w154" + item.profile_path : getFakeImage(),
      }
    })

    return items
  }
}

const mutations = {
  updateAllStroies(state, payload) {
    state.items = []
    state.items = payload.list
  }
}

const actions = {
  fetchStories(context) {

    theMovieDb.people.getPopular({ page: randomPage() }, success => {

      let response = JSON.parse(success)
      context.commit('updateAllStroies', { list: response.results })

    }, fail => {

    })

  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
}