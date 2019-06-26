<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <VProfile/>
  </div>
</template>

<script>
import { mapState } from "vuex"

import style from './assets/style/_colors.sass';

import VProfile from '@/components/templates/VProfile'


export default {
  name: "App",
  components: {
    VProfile
  },
  created() {

  },
  data() {
    return {
      user: {
        info: {
          name: "grafikri",
          desc: "Long description",
          photo: "https://fakeimg.pl/200x200/?text=Photo&font=lobster",
          amouts: {
            post: "32k",
            followers: "10k",
            following: "5k"
          }
        },
        posts: [

        ],
        igtv: [

        ],
        saved: [

        ],
        tagged: [

        ],
      }
    }
  },
  methods: {
    handleClick() {
      console.log("click")
    }
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
