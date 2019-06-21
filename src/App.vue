<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <!-- <VTimeLine
      :users="[{name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster'},{name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster'},{name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster'},{name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster'},{name: 'Tony Stark', desc: '10 hours ago', photo: 'https://fakeimg.pl/200x200/?text=Photo&font=lobster'}]"
    />-->
    <VPost/>
  </div>
</template>

<script>

import VTimeLine from '@/components/templates/VTimeLine'
import VPost from '@/components/organisms/VPost'

export default {
  name: "App",
  components: {
    VTimeLine,
    VPost
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
