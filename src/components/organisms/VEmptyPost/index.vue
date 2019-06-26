<template>
  <div class="v-o-empty-post">
    <div class="left">
      <VImage
        width="100%"
        url="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg"
      />
    </div>
    <div class="right">
      <div class="desc">
        <div>
          <VText bold="bold" size="18px">{{ title }}</VText>
        </div>
        <div>
          <VText size="16px">{{ desc }}</VText>
        </div>
      </div>
      <div class="buttons">
        <div>
          <VButton url="apple">
            <VImage
              height="40px"
              url="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            />
          </VButton>
        </div>
        <div>
          <VButton url="android">
            <VImage
              height="40px"
              url="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            />
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VImage from '@/components/atoms/VImage'
import VButton from '@/components/atoms/VButton'
import VText from '@/components/atoms/VText'

export default {
  name: "VEmptyPost",
  components: {
    VImage,
    VButton,
    VText,
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
  },

}
</script>

<style lang="sass" scoped>
  .v-o-empty-post
    display: flex
    .left
      flex-basis: 40%
    .right
      background: white
      flex-grow: 1
      display: flex
      flex-direction: column
      justify-content: center
      .desc
        display: flex
        flex-direction: column
        text-align: center
        div
          margin:
            bottom: 15px
      .buttons
        display: flex
        justify-content: center
        div
          margin:
            left: 10px
            right: 10px
    
</style>