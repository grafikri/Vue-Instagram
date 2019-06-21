<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <!-- <VIcon class="mini-search"/> -->
    <VHeader/>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VInputSearch from '@/components/molecules/VInputSearch'
import VHeader from '@/components/organisms/VHeader'

export default {
  name: "App",
  components: {
    VIcon,
    VInputSearch,
    VHeader
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

body {
  margin: 0;
  padding: 0;
  background: $bg-color;
}
</style>
