<template>
  <div class="v-m-user-vertical-entity">
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
  name: "VUserVerticalEntity",
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
  .v-m-user-vertical-entity
    display: flex
    div
      text-align: center
      flex-grow: 1
      p
        margin: 0
        font-size: 14px
        font-weight: normal
      .count
        margin:
          right: 5px
        font-weight: 600
      .text
        color: $secondary-light-text-color
        
        
</style>