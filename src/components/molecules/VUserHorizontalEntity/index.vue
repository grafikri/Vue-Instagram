<template>
  <div class="v-m-user-horizontal-entity">
    <div>
      <p class="count">{{ post.count }}</p>
      <p class="text">{{ post.text }}</p>
    </div>
    <div>
      <VButton>
        <p class="count">{{ followers.count }}</p>
        <p class="text">{{ followers.text }}</p>
      </VButton>
    </div>
    <div>
      <VButton>
        <p class="count">{{ following.count }}</p>
        <p class="text">{{ following.text }}</p>
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
  data() {
    return {
      post: {
        count: "35k",
        text: "posts"
      },
      followers: {
        count: "25k",
        text: "followers"
      },
      following: {
        count: "25k",
        text: "following"
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-m-user-horizontal-entity
    display: flex
    div
      display: flex
      flex-grow: 1
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