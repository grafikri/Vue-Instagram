<template>
  <div class="v-a-tab-text" :active="active">
    <VButton @click="handleClick">
      <div class="container">
        <div class="icon" v-if="icon">
          <VIcon :class="icon + '-' + (active ? 'dark' : 'light' )"/>
        </div>
        <div class="text" v-if="text">{{ text }}</div>
      </div>
    </VButton>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VButton from '@/components/atoms/VButton'

export default {
  name: "VTabText",
  components: {
    VIcon,
    VButton
  },
  props: {
    active: {
      type: Boolean, // button is active or passive
      default: false
    },
    text: {
      type: String, // button name
      default: "",
    },
    icon: {
      type: String, // icon class
      default: "",
    }
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  },
}
</script>

<style lang="sass" scoped>

  %visibleBorder
    border-top: 0.5px solid $dark-text-color
    
  %hideBorder
    border-top: 0.5px solid rgba(255, 255, 255, 0)
  

  .v-a-tab-text
    display: inline-block
    .container
      display: flex
      align-items: center
      padding:
        top: 18px
        bottom: 18px
      color: $secondary-light-text-color
      font-size: 14px
      font-weight: 600
      letter-spacing: 1px
      @extend %hideBorder
      
      .icon
        margin:
          right: 8px
      .text
        line-height: 0
    &[active="true"]
      .container
        color: $dark-text-color
        @extend %visibleBorder
        
</style>