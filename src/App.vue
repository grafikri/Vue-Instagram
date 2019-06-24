<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VUserCard :id="32" name="Hulk" desc="Seni takip ediyor"/>
  </div>
</template>

<script>
import { mapState } from "vuex"

import VHome from '@/components/pages/VHome'
import VUserName from '@/components/atoms/VUserName'
import VUserDesc from '@/components/atoms/VUserDesc'
import VButton from '@/components/atoms/VButton'
import VUserCard from '@/components/organisms/VUserCard'



export default {
  name: "App",
  created() { },
  components: {
    VHome,
    VUserCard
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
