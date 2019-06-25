<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VUserLargeTitle name="grafikri">
      <VButton clear filled to="/profiel">Edit Profile</VButton>
      <VButton clear filled to="/profiel">Edit Profile</VButton>
    </VUserLargeTitle>
  </div>
</template>

<script>
import { mapState } from "vuex"


import VHome from '@/components/pages/VHome'
import VButton from '@/components/atoms/VButton'
import VUserLargeTitle from '@/components/molecules/VUserLargeTitle'


export default {
  name: "App",
  created() { },
  components: {
    VUserLargeTitle,
    VButton
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
