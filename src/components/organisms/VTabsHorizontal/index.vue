<template>
  <div class="v-m-tabs-horizontal">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import VIconText from '@/components/molecules/VIconText'

export default {
  name: "VTabsLarge",
  components: {
    VIconText,
  },
}
</script>

<style lang="sass" scoped>
  .v-m-tabs-horizontal
    border-top: $border-line
    .container
      margin:
        top: -1px
      display: flex
      justify-content: center
      > *
        margin:
          left: 25px
          right: 25px
        
    

</style>