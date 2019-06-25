<template>
  <div class="v-m-user-large-viewer">
    <div class="left">
      <VButton to="profile">
        <VImage :width="150" rounded url="http://fakeimg.pl/200x200/?text=Photo&font=lobster"/>
      </VButton>
    </div>
    <div class="right">
      <div class="title">
        <VUserLargeTitle name="grafikri">
          <VButton clear filled to="/profiel">Edit Profile</VButton>
          <VButton clear filled to="/profiel">Edit Profile</VButton>
        </VUserLargeTitle>
      </div>
      <div class="entity">
        <VUserHorizontalEntity/>
      </div>
      <div class="desc">desc</div>
    </div>
  </div>
</template>

<script>

import VButton from '@/components/atoms/VButton'
import VImage from '@/components/atoms/VImage'
import VUserLargeTitle from '@/components/molecules/VUserLargeTitle'
import VUserHorizontalEntity from '@/components/molecules/VUserHorizontalEntity'

export default {
  name: "VUserLargeViewer",
  components: {
    VButton,
    VImage,
    VUserLargeTitle,
    VUserHorizontalEntity
  },
}
</script>

<style lang="sass" scoped>
  .v-m-user-large-viewer
    display: flex
    padding:
      top: 45px
      bottom: 45px
    .left
      flex-basis: 35%
      text-align: center
    .right
      flex-grow: 1
      .title, .entity
        margin:
          bottom: 25px

</style>