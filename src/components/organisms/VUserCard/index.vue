<template>
  <div class="v-m-user-card">
    <div class="image">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VImage :width="56" rounded url="https://fakeimg.pl/200x200/?text=Photo&font=lobster"/>
      </VButton>
    </div>
    <div class="name">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VUserName>{{ name }}</VUserName>
      </VButton>
    </div>
    <div class="desc">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VUserDesc>{{ desc }}</VUserDesc>
      </VButton>
    </div>
    <div class="button">
      <VButton primary filled to="/hulk">Takipt Et</VButton>
    </div>
  </div>
</template>

<script>

import VImage from '@/components/atoms/VImage'
import VUserName from '@/components/atoms/VUserName'
import VUserDesc from '@/components/atoms/VUserDesc'
import VButton from '@/components/atoms/VButton'

export default {
  name: "VUserCard",
  components: {
    VUserName,
    VUserDesc,
    VButton,
    VImage
  },
  props: {
    id: [String, Number], // User id
    name: String, // User name,
    desc: String
  }
}
</script>


<style lang="sass">
  .v-m-user-card
    @extend %box-style
    text-align: center
    background: white
    padding: 15px
    .image
      margin:
        bottom: 10px
    .name
      margin:
        bottom: 4px
    .button
      margin:
        top: 20px
</style>

