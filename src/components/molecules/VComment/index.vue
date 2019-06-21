<template>
  <div class="v-m-comment">
    <div class="left">
      <span class="user">{{ name }}</span>
      <span class="comment">{{ comment }}</span>
    </div>
    <div class="right">
      <VIcon v-if="withLike" class="mini-fav"/>
    </div>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'

export default {
  name: "VComment",
  components: {
    VIcon
  },
  props: {
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
      flex-grow: 1
      .user
        font-weight: bold
        font-size: $comment-font-size
        padding:
          right: 5px
      .comment
          font-size: $comment-font-size
</style>

