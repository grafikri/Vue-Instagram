<template>
  <div class="v-m-post-comment-input">
    <form @submit.prevent="onSubmit">
      <div class="left">
        <textarea
          @keydown.enter.prevent="onSubmit"
          rows="1"
          ref="myTextArea"
          v-model="message"
          placeholder="Mesaj yaz..."
        ></textarea>
      </div>
      <div class="right">
        <VButton :passive="buttonPassive" @click="click">Share</VButton>
      </div>
    </form>
  </div>
</template>

<script>

import _ from "lodash"
import VButton from "@/components/atoms/VButton"

export default {
  name: "VPostCommentInput",
  components: {
    VButton
  },
  data() {
    return {
      message: '',
      buttonPassive: true
    }
  },
  watch: {
    message(newVal, oldVal) {
      let text = _.trim(newVal)
      this.buttonPassive = text ? false : true
      if (text) {
        this.$emit('updatedText', text)
      }
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    onSubmit() {
      this.$emit('submit', this.message)
      this.message = ''
    },
  }
}
</script>

<style lang="sass">
  .v-m-post-comment-input
    form
      display: flex
      align-items: center
      .left
        flex-grow: 1
        line-height: 0
        margin:
          right: 5px
        textarea
          padding: 0
          font-size: 15px
          color: gray
          width: 100%
          box-sizing: border-box
          background: none
          border: none
          resize: none
          &:focus
            outline: none
      .right
        line-height: 0
</style>


