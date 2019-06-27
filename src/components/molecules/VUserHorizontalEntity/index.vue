<template>
  <div class="v-m-user-horizontal-entity">
    <div>
      <p class="count">{{ posts.count }}</p>
      <p class="text">{{ posts.text }}</p>
    </div>
    <div>
      <VButton>
        <p class="count">{{ followers.count }}</p>
        <p class="text">{{ followers.text }}</p>
      </VButton>
    </div>
    <div>
      <VButton>
        <p class="count">{{ followings.count }}</p>
        <p class="text">{{ followings.text }}</p>
      </VButton>
    </div>
  </div>
</template>

<script>

import VButton from '@/components/atoms/VButton'

export default {
  name: "VUserHorizontalEntity",
  components: {
    VButton
  },
  props: {
    posts: Object,
    followers: Object,
    followings: Object,
  },
}
</script>

<style lang="sass" scoped>
  .v-m-user-horizontal-entity
    display: flex
    div
      display: flex
      margin:
        right: 35px
      p
        margin: 0
        display: inline-block
        font-size: 16px
        font-weight: normal
      .count
        margin:
          right: 5px
        font-weight: 600
      .text
        
        
</style>