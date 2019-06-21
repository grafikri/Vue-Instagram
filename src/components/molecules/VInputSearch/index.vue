<template>
  <div>
    <input type="text" placeholder="Ara">
    <span class="icon">
      <VIcon class="mini-search"/>
    </span>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'

export default {
  name: "VInputSearch",
  components: {
    VIcon
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
    background: #fafafa
    box-sizing: border-box
    width: 100%
    text-align: center
    border: solid 1px #dbdbdb
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
      left: -45px
      right: 0px
      top: 0
      bottom: 0
      margin: auto
        

</style>


