<template>
  <div class="v-m-user-large-viewer">
    <div class="left">
      <VButton to="profile">
        <VImage width="150px" rounded :url="photo"/>
      </VButton>
    </div>
    <div class="right">
      <div class="title">
        <VUserLargeTitle :name="name">
          <VButton clear filled to="/profiel">Edit Profile</VButton>
          <VButton clear filled to="/profiel">Edit Profile</VButton>
        </VUserLargeTitle>
      </div>
      <div class="entity">
        <VUserHorizontalEntity :posts="posts" :followers="followers" :followings="followings"/>
      </div>
      <div class="desc">{{ desc }}</div>
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
  props: {
    name: String,
    photo: String,
    desc: String,
    posts: Object,
    followers: Object,
    followings: Object
  },
}
</script>

<style lang="sass" scoped>
  .v-m-user-large-viewer
    display: flex
    padding:
      top: 5px
      bottom: 40px
    .left
      flex-basis: 30%
      text-align: center
    .right
      flex-grow: 1
      margin:
        left: 30px
      .title, .entity
        margin:
          bottom: 25px

</style>