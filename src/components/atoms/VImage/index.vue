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
      imageStyle: {},
      message: "Merhaba"
    }
  },
  props: {
    url: String,
    width: [String],
    height: [String],
    rounded: Boolean,
    aspectRatio: {
      type: String,
      default: "1:1"
    },
    measureType: {
      type: String, //pixel or percent,
      default: "%"
    }
  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

    imagesLoaded(this.$refs.container, () => {

      this.adjustImageSizes()
    })


  },
  computed: {
    styleObject() {

      let borderRadius = this.rounded ? 999999 + "px" : 'inherit'

      return {
        borderRadius: borderRadius,
        // ...this.calculateWidthHeight()
      }
    },
    containerStyle() {

      let boxWidth = "initial"
      let boxHeight = "initial"

      if (this.width && this.height) {
        boxWidth = this.width + this.measureType
        boxHeight = this.height + this.measureType

      } else if (this.width) {

        boxWidth = this.width + this.measureType
        boxHeight = (this.width / this.aspectRatioCons) + this.measureType
      }
      else if (this.height) {
        boxHeight = this.height + this.measureType
        boxWidth = (this.height / this.aspectRatioCons) + this.measureType
      }

      return {
        width: boxWidth, height: boxHeight
      }
    },
    aspectRatioCons() {
      let arrAspectRatio = this.aspectRatio.split(":")
      let width = arrAspectRatio[0]
      let height = arrAspectRatio[1]
      return width / height
    }
  },
  methods: {
    adjustImageSizes() {
      let imageWidth = this.$refs.photo.offsetWidth
      let imageHeight = this.$refs.photo.offsetHeight
      let imageRatio = imageWidth / imageHeight

      let containerWidth = this.$refs.container.offsetWidth
      let containerHeight = this.$refs.container.offsetHeight

      let widen = false
      let hiden = true

      let smart = false

      if (imageWidth > imageHeight) {
        hiden = true
      } else {
        widen = true
      }

      if (widen) {

        let newImageWidth = containerWidth
        let newImageHeight = containerWidth / (imageRatio)

        let imageNewPos = this.getImagePos({ width: newImageWidth, height: newImageHeight }, { width: containerWidth, height: containerHeight })

        let newImageStyle = {
          width: newImageWidth + "px",
          height: newImageHeight + "px",
          marginLeft: imageNewPos.xPos + "px", marginTop: imageNewPos.yPos + "px"
        }

        this.imageStyle = { ...this.imageStyle, ...newImageStyle }

      } else if (hiden) {

        let newImageHeight = containerHeight
        let newImageWidth = containerHeight * (imageRatio)

        let imageNewPos = this.getImagePos({ width: newImageWidth, height: newImageHeight }, { width: containerWidth, height: containerHeight })

        let newImageStyle = {
          width: newImageWidth + "px",
          height: newImageHeight + "px",
          marginLeft: imageNewPos.xPos + "px", marginTop: imageNewPos.yPos + "px"
        }

        this.imageStyle = { ...this.imageStyle, ...newImageStyle }

      }
      else {

        let imageNewPos = this.getImagePos({ width: imageWidth, height: imageHeight }, { width: containerWidth, height: containerHeight })

        let newImageStyle = {
          marginLeft: imageNewPos.xPos + "px", marginTop: imageNewPos.yPos + "px"
        }

        this.imageStyle = { ...this.imageStyle, ...newImageStyle }

        console.log("salt: ", imageNewPos)
      }
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
</style>



