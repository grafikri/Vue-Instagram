<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <!-- <VVerticalSuggestUser
      :users="[{id: '1', name: 'Hulk2', desc: 'Hello'}, {id: '1', name: 'Hulk', desc: 'Hello'}, {id: '1', name: 'Hulk', desc: 'Hello'}]"
    />-->
    <VPhotoCard
      url="https://fakeimg.pl/200x200/?text=Photo&font=lobster"
      :like-count="32"
      :comment-count="64"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"


import VVerticalSuggestUser from '@/components/organisms/VVerticalSuggestUser'
import VMiniTitle from '@/components/atoms/VMiniTitle'
import VButton from '@/components/atoms/VButton'
import VIconText from '@/components/molecules/VIconText'

import VIcon from '@/components/atoms/VIcon'
import VPhotoCard from '@/components/molecules/VPhotoCard'



import VHome from '@/components/pages/VHome'




export default {
  name: "App",
  created() { },
  components: {
    VIconText,
    VIcon,
    VPhotoCard,
    VVerticalSuggestUser,
    VMiniTitle
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
