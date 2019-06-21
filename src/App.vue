<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <!-- <VIcon class="mini-search"/> -->
    <VInputSearch/>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VInputSearch from '@/components/molecules/VInputSearch'

export default {
  name: "App",
  components: {
    VIcon,
    VInputSearch
  }
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
