/**
 * That data is used to show saved posts that belong auth user
 */
const state = [
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
    id: 3,
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


export default {
  namespaced: true,
  state
}