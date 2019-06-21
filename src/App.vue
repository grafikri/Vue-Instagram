<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <!-- <VIcon class="mini-search"/> -->
    <!-- <VUserLine
      photo="https://fakeimg.pl/200x200/?text=Photo&font=lobster"
      name="Tony Stark"
      :size="48"
    />-->
    <VVerticalStory/>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VVerticalStory from '@/components/organisms/VVerticalStory'
import VUserLine from '@/components/molecules/VUserLine'
import VImage from '@/components/atoms/VImage'
import VInputSearch from '@/components/molecules/VInputSearch'
import VHeader from '@/components/organisms/VHeader'
import VLayout from '@/components/atoms/VLayout'

export default {
  name: "App",
  components: {
    VIcon,
    VUserLine,
    VInputSearch,
    VHeader,
    VLayout,
    VImage,
    VVerticalStory
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
