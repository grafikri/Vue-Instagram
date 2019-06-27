<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VProfile :user="user" :posts="posts"/>
  </div>
</template>

<script>
import { mapState } from "vuex"

import style from './assets/style/_colors.sass';
import VProfile from '@/components/templates/VProfile'


export default {
  name: "App",
  components: {
    VProfile
  },
  created() {

  },
  methods: {
    handleClick() {

    }
  },
  computed: mapState({
    user: 'user',
    'posts': state => state.posts.map((post) => {
      return {
        photo: post.photo.thumb,
        likeCount: post.amount.like,
        commentCount: post.amount.comment
      }
    })
  }),
}
</script>


<style lang="scss">
#app {
  font-family: $font-family;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background: $bg-color;
}
</style>
