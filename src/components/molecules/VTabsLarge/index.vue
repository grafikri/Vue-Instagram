<template>
  <div class="v-m-tabs-large">
    <VIconText text="POSTS" icon="mini-fav"/>
    <VIconText text="POSTS" icon="mini-fav"/>
    <VIconText text="POSTS" icon="mini-fav"/>
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
  .v-m-tabs-large
    display: flex
    flex-grow: 1
    *
      color: $dark-text-color !important
      margin:
        left: 5px
        right: 5px
    

</style>