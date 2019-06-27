<template>
  <div class="v-o-footer">
    <div class="left">
      <div class="container" v-for="item in links" :key="item.id">
        <VLink :to="item.link">
          <VText bold="bold" :color="colors.primaryColor">{{ item.title }}</VText>
        </VLink>
      </div>
    </div>
    <div class="right">
      <VText bold="bold" :color="colors.secondaryLightTextColor">© 2019 INSTAGRAM</VText>
    </div>
  </div>
</template>

<script>

import colors from '@/assets/style/_colors.sass'
import VLink from '@/components/atoms/VLink'
import VText from '@/components/atoms/VText'

export default {
  name: "VFooter",
  data() {
    return {
      colors: colors
    }
  },
  props: {
    links: {
      type: Array,
      default: []
    },
  },
  components: {
    VLink,
    VText
  }
}
</script>

<style lang="sass" scoped>
  .v-o-footer
    display: flex
    align-items: center
    .left
      flex-grow: 1
      display: flex
      align-items: center
      .container
        margin:
          right: 10px
        

</style>