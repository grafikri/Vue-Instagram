<template>
  <div
    class="v-m-photo-card"
    :active="active"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <VLink to="/dsda">
      <VBoxImage :url="url"/>

      <div class="overlay"></div>
      <div class="box">
        <div class="box-item">
          <div class="container">
            <div class="item">
              <VIconText :text="likeCount" icon="overlay-heart"/>
            </div>
            <div class="item">
              <VIconText :text="commentCount" icon="overlay-comment"/>
            </div>
          </div>
        </div>
      </div>
    </VLink>
  </div>
</template>



<script>

import VLink from '@/components/atoms/VLink'
import VBoxImage from '@/components/atoms/VBoxImage'
import VButton from '@/components/atoms/VButton'
import VIcon from '@/components/atoms/VIcon'
import VIconText from '@/components/molecules/VIconText'


export default {
  name: "VPhotoCard",
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleMouseOver() {
      this.active = true
    },
    handleMouseOut() {
      this.active = false
    }
  },
  components: {
    VBoxImage,
    VButton,
    VIcon,
    VIconText,
    VLink
  },
  props: {
    url: String,
    likeCount: [String, Number],
    commentCount: [String, Number]
  }
}
</script>

<style lang="sass" scoped>
  .v-m-photo-card
    line-height: 0
    position: relative
    &[active] 
      .overlay
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: rgba(0, 0, 0, 0.1)
    .box
      display: none
    &[active]
      .box
        //width: 100%
        display: block
        position: absolute
        left: 50%
        top: 50%
        .box-item
          position: relative
          left: -50%
          top: -50%
          transform: translate(0, -50%)
          .container
            display: flex
            .item
              margin:
                left: 10px
                right: 10px
</style>


