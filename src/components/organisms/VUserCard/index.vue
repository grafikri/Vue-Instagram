<template>
  <div class="v-m-user-card">
    <div class="image">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VBoxImage rounded :url="photo" />
      </VButton>
    </div>
    <div class="name">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VUserName :lines="1">{{ name }}</VUserName>
      </VButton>
    </div>
    <div class="desc">
      <VButton :to="{name: 'profile' ,params: {id: id}}">
        <VUserDesc>{{ desc }}</VUserDesc>
      </VButton>
    </div>
    <div class="button">
      <VButton primary filled :to="{name: 'profile', params: {id: id}}">Takipt Et</VButton>
    </div>
  </div>
</template>

<script>

import VBoxImage from '@/components/atoms/VBoxImage'
import VUserName from '@/components/atoms/VUserName'
import VUserDesc from '@/components/atoms/VUserDesc'
import VButton from '@/components/atoms/VButton'

export default {
  name: "VUserCard",
  components: {
    VUserName,
    VUserDesc,
    VButton,
    VBoxImage
  },
  props: {
    id: [String, Number],
    name: String,
    desc: String,
    photo: String
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
      width: 56px
      margin: auto
      margin:
        bottom: 10px
    .name
      margin:
        bottom: 4px
    .button
      margin:
        top: 20px
</style>

