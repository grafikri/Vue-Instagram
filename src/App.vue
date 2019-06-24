<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->

    <VExplore :explore="explore" :users="users"/>
  </div>
</template>

<script>
import { mapState } from "vuex"

import VExplore from '@/components/templates/VExplore'
import VHome from '@/components/pages/VHome'




export default {
  name: "App",
  created() { },
  components: {
    VExplore
  },
  computed: {
    ...mapState({
      "explore": state => state.explore,
      "users": state => state.explore_new_user
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
