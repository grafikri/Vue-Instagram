<template>
  <div class="v-m-icon-text">
    <div class="container">
      <div class="icon">
        <VIcon :class="icon"/>
      </div>
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon';

export default {
  name: "VIconText",
  components: {
    VIcon
  },
  props: {
    text: [String, Number],
    icon: String
  }
}
</script>

<style lang="sass" scoped>
  .v-m-icon-text
    .container
      display: flex
      align-items: center
      .text
        font-weight: 600
        color: white
        font-size: 16px
      div
        margin:
          left: 2px
          right: 2px
</style>