<template>
  <div :class="isFocus ? 'active' : ''">
    <input type="text" @focus="handleFocus" @blur="handleBlur" placeholder="Search">

    <span class="icon">
      <VIcon class="mini-search"/>
    </span>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'

export default {
  name: "VInputSearch",
  data() {
    return {
      isFocus: false
    }
  },
  components: {
    VIcon
  },
  methods: {
    handleFocus() {
      //this.isFocus = true
    },
    handleBlur() {
      //this.isFocus = false
    },
  }
}
</script>


<style lang="sass" scoped>
  div
    position: relative
    &.active
      input
        padding:
          left: 26px
        text-align: left

      span
        left: 10px
        right: inherit

  input
    background: $bg-color
    box-sizing: border-box
    width: 100%
    text-align: center
    border: solid 1px $stroke-color
    border-radius: 3px
    color: #262626
    outline: 0
    padding:
      top: 6px
      bottom: 6px
    padding:
      left: 10px
      right: 10px
    font-size: 14px
      

  .icon
      width: 10px
      height: 10px
      display: block
      position: absolute
      left: -65px
      right: 0px
      top: 0
      bottom: 0
      margin: auto
        

</style>


