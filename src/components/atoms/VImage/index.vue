<template>
  <div ref="container" class="v-a-image" :style="containerStyle">
    <img ref="photo" class="v-a-image" :style="imageStyle" :src="url">
  </div>
</template>

<script>

import imagesLoaded from 'imagesloaded'


export default {
  name: "VImage",
  data() {
    return {
      message: "Merhaba",
      containerWidth: 0,
      containerHeight: 0,
      imageWidth: 0,
      imageHeight: 0,
      imageXPos: 0,
      imageYPos: 0
    }
  },
  props: {
    url: String,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    rounded: Boolean,
    aspectRatio: {
      type: String,
      default: "1:1"
    },
    measureType: {
      type: String, //pixel or percent,
      default: "px"
    }
  },
  mounted() {

    imagesLoaded(this.$refs.container, () => {
      this.adjustImageSizes()
    })
  },
  computed: {
    imageStyle() {
      return {
        width: this.imageWidth + "px",
        height: this.imageHeight + "px",
        marginLeft: this.imageXPos + "px",
        marginTop: this.imageYPos + "px"
      }
    },
    styleObject() {

      let borderRadius = this.rounded ? 999999 + "px" : 'inherit'

      return {
        borderRadius: borderRadius,
        // ...this.calculateWidthHeight()
      }
    },
    containerStyle() {

      let boxWidth = "10"
      let boxHeight = "10"

      if (this.width && this.height) {
        boxWidth = this.width
        boxHeight = this.height
      } else if (this.width) {

        this.containerWidth = this.width
        this.containerHeight = (this.width / this.aspectRatioCons)
      }
      else if (this.height) {
        boxHeight = this.height
        boxWidth = (this.height / this.aspectRatioCons)
      }

      return {
        width: this.containerWidth + "px", height: this.containerHeight + "px"
      }
    },
    aspectRatioCons() {
      let arrAspectRatio = this.aspectRatio.split(":")
      let width = arrAspectRatio[0]
      let height = arrAspectRatio[1]
      return width / height
    }
  },
  watch: {
    width(newVal, oldVal) {
      //this.adjustImageSizes()
    }
  },
  methods: {
    adjustImageSizes() {
      let imageWidth = this.$refs.photo.naturalWidth
      let imageHeight = this.$refs.photo.naturalHeight
      let imageRatio = imageWidth / imageHeight


      let widen = true
      let hiden = false
      let smart = false

      // if (imageWidth > imageHeight) {
      //   hiden = true
      // } else {
      //   widen = true
      // }

      if (widen) {

        this.imageWidth = this.containerWidth
        this.imageHeight = this.imageWidth / (imageRatio)

      } else if (hiden) {

        this.imageHeight = this.containerHeight
        this.imageWidth = this.imageHeight * (imageRatio)

      }

      let imageNewPos = this.getImagePos({ width: this.imageWidth, height: this.imageHeight }, { width: this.containerWidth, height: this.containerHeight })

      this.imageXPos = imageNewPos.xPos
      this.imageYPos = imageNewPos.yPos
    },
    getImagePos(image, container) {

      let position = "center"
      let xDiff = image.width - container.width
      let yDiff = image.height - container.height

      let xPos = (xDiff / 2) * -1
      let yPos = (yDiff / 2) * -1

      return { xPos, yPos }

    }
  }
}
</script>

<style lang="sass" scoped>
  .v-a-image
    background: red
    margin: auto
    overflow: hidden
    line-height: 0
</style>



