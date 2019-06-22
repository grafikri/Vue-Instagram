<template>
  <div class="v-m-post-comment-input">
    <div class="left">left</div>
    <div class="right">
      <VButton>Share</VButton>
    </div>
  </div>
</template>

<script>

import VButton from "@/components/atoms/VButton"
//import VInput from "@/components/atoms/VInput"

export default {
  name: "VPostCommentInput",
  components: {
    VButton
  },
  methods: {
    click() {
      console.log("oksss")
    }
  },
}
</script>

<style lang="sass">
  // .v-m-post-comment-input
  //     @extend %box-style
</style>


