<template>
  <div class="v-m-comment">
    <div class="left">
      <div class="user-container">
        <VLink :to="{ name: 'profile', params: {id: id}}">
          <span class="user">{{ name }}</span>
        </VLink>
      </div>
      <div class="comment-container">
        <span class="comment">{{ comment }}</span>
      </div>
    </div>
    <div class="right">
      <VIcon v-if="withLike" class="mini-fav"/>
    </div>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VLink from '@/components/atoms/VLink'

export default {
  name: "VComment",
  components: {
    VIcon,
    VLink
  },
  props: {
    id: {
      type: [String, Number],
      default: 0
    },
    /**
     * User name
     */
    name: String,
    comment: String,
    /**
     * if the variable is true, fav button will appear
     */
    withLike: Boolean
  }
}
</script>

    
<style lang="sass" scoped>

  $comment-font-size: 14px

  .v-m-comment
    display: flex
    align-items: center
    .left
      .user-container
        display: inline-block
      .comment-container
        display: inline
      display: inline-block
      flex-grow: 1
      .user
        font-weight: bold
        font-size: $comment-font-size
        color: $dark-text-color
        padding:
          right: 5px
      .comment
          font-size: $comment-font-size
</style>

