<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <div class="box" style="width: 400px; height: 400px;">
      <VImage
        width="250"
        measureType="px"
        aspectRatio="1:1"
        url="https://fakeimg.pl/200x100/?text=Photo&font=lobster"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

import VImage from '@/components/atoms/VImage'
import style from './assets/style/_colors.sass'



export default {
  name: "App",
  components: {
    VImage
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions({ fetch: 'timeline/fetchPopularPeople' })
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
