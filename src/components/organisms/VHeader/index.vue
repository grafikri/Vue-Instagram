<template>
  <div class="v-o-header" :class="{ minify: minify }">
    <VLayout>
      <div class="container">
        <div class="left">
          <div>
            <VTextLogo/>
            <div class="vertical-line"></div>
            <div class="logo">
              <VLogo/>
            </div>
          </div>
        </div>
        <div class="middle">
          <VInputSearch/>
        </div>
        <div class="right">
          <div>
            <VIcon class="compass"/>
            <VIcon class="fav"/>
            <VIcon class="user"/>
          </div>
        </div>
      </div>
    </VLayout>
  </div>
</template>


<script>

import VLayout from '@/components/atoms/VLayout'
import VIcon from '@/components/atoms/VIcon'
import VLogo from '@/components/atoms/VLogo'
import VTextLogo from '@/components/atoms/VTextLogo'
import VInputSearch from '@/components/molecules/VInputSearch'

export default {
  name: "VHeader",
  components: {
    VIcon,
    VLogo,
    VTextLogo,
    VInputSearch,
    VLayout
  },
  props: {
    minify: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="sass" scoped>

.v-o-header
  background: white
  border-bottom: 1px solid $stroke-color
  transition:
    property: padding
    duration: 0.3s
  padding:
    top: 21px
    bottom: 21px
    left: 20px
    right: 20px
  &.minify
    padding:
      top: 10px
      bottom: 10px
    .logo, .vertical-line
      display: none !important


  .container
    display: flex
    align-items: center

    > div
      flex-grow: 1
      flex-shrink: 0
      flex-basis: 33%
      &.left
        div
          display: flex
          align-items: center
        .vertical-line
          height: 27px
          border: solid 0.5px black
          margin:
            left: 15px
            right: 15px
        .logo
          margin:
            top: 5px
          
      &.right
        text-align: right
        div
          display: flex
          justify-content: flex-end
          span
            margin:
              left: 30px
      &.middle
        text-align: center

</style>

