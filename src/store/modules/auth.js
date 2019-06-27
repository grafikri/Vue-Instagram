const state = {
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
  },
}

export default {
  namespaced: true,
  state
}