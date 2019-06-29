<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->

    <!-- url="https://fakeimg.pl/200x100/?text=Photo&font=lobster" -->
    <!-- <div class="box" style="width: 300px; height: 200px">
      <VImage
        :width="180"
        url="http://i.hurimg.com/i/hurriyet/75/300x170/5cf4caa22269a224b8e90d61.jpg"
      />
    </div>-->
    <router-view/>
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
