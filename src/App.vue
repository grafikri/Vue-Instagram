<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view :key="$route.path"/>
  </div>
</template>

<script>


import { mapState, mapActions } from "vuex"

import VBoxImage from '@/components/atoms/VBoxImage'
import VImage from '@/components/atoms/VImage'
import VPhotoCard from '@/components/molecules/VPhotoCard'

import style from './assets/style/_colors.sass'



export default {
  name: "App",
  components: {
    VBoxImage,
    VImage,
    VPhotoCard
  },
  created() {
    this.fetchAuth()
    this.fetchUsers()
    this.fetchStories()
  },
  methods: {
    ...mapActions({ fetchUsers: 'timeline/fetchPopularPeople', fetchStories: 'stories/fetchStories', fetchAuth: 'auth/fetchAuth' })
  },

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
