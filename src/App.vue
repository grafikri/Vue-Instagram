<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view :key="$route.path" v-if="showApp" />
    <VAppLoadingPage v-if="!showApp" />
  </div>
</template>

<script>


import { mapState, mapActions, mapMutations } from "vuex"

import VAppLoadingPage from '@/components/pages/VAppLoadingPage'

import style from './assets/style/_colors.sass'



export default {
  name: "App",
  components: {
    VAppLoadingPage,
  },
  created() {

    //console.log(this.$store.state)
    setTimeout(() => {
      this.updateStatus({ loading: false, showApp: true })
    }, 2000)

    this.fetchAuth()
    this.fetchPopularPeople()
    this.fetchStories()
    this.fetchSuggestions()

  },
  computed: {
    ...mapState({
      appLoading: state => state.app.loading,
      showApp: state => state.app.showApp
    })
  },
  methods: {
    ...mapActions({ fetchPopularPeople: 'timeline/fetchPopularPeople', fetchStories: 'stories/fetchStories', fetchAuth: 'auth/fetchAuth', fetchSuggestions: 'suggestions/fetchSuggestions' }),
    ...mapMutations({
      updateStatus: 'app/updateAppLoadingStatus'
    })
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
