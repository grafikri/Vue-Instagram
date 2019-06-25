<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VUserLargeViewer/>
  </div>
</template>

<script>
import { mapState } from "vuex"


import VUserLargeViewer from '@/components/organisms/VUserLargeViewer'


export default {
  name: "App",
  created() { },
  components: {
    VUserLargeViewer
  }
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
