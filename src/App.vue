<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VVerticalSuggestUser
      :users="[{id: '1', name: 'Hulk2', desc: 'Hello'}, {id: '1', name: 'Hulk', desc: 'Hello'}, {id: '1', name: 'Hulk', desc: 'Hello'}]"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"


import VVerticalSuggestUser from '@/components/organisms/VVerticalSuggestUser'

import VHome from '@/components/pages/VHome'



export default {
  name: "App",
  created() { },
  components: {
    VHome,
    VVerticalSuggestUser
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
