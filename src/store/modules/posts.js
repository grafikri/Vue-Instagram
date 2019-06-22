const state = [
  {
    user: {
      id: "123",
      name: "HULK",
      photo: "https://fakeimg.pl/200x200/?text=Photo&font=lobster",
      comment: "Hi I am HULK"
    },
    post: {
      photo: "https://fakeimg.pl/1000x1000/?text=Photo&font=lobster",
      date: "2 hours ago",
      viewCount: 200,
      comments: {
        list: [
          {
            name: "Spider-Man",
            comment: "I am here, too"
          },
          {
            name: "Ant-Man",
            comment: "I am here, too"
          }
        ],
        count: 2
      }
    }
  }
]


export default {
  namepspaced: true,
  state
}