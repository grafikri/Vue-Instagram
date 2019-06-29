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
    },
    fit: {
      type: String,
      default: "smart"
    },
    xPos: {
      type: String,
      default: "center",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1
      }
    },
    yPos: {
      type: String,
      default: "middle",
      validator: (value) => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1
      }
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
    },
    imagePos() {

      let xPos = 0
      let yPos = 0

      switch (this.xPos) {
        case "left":
          xPos = 0
          console.log("okss")
          break
        case "center":
          xPos = ((this.imageWidth - this.containerWidth) / 2) * -1
          break
        case "right":
          xPos = (this.imageWidth - this.containerWidth) * -1
          break
      }

      switch (this.yPos) {
        case "top":
          yPos = 0
          break
        case "middle":
          yPos = ((this.imageHeight - this.containerHeight) / 2) * -1
          break
        case "bottom":
          yPos = (this.imageHeight - this.containerHeight) * -1
          break
      }

      return { xPos, yPos }
    }
  },
  watch: {
    containerStyle(newVal, oldVal) {
      this.adjustImageSizes()
    },
    imageWidth(newVal, oldVal) {
      this.updateImagePos()
    },
    imageHeight(newVal, oldVal) {
      this.updateImagePos()
    }
  },
  methods: {
    calculateEdgeMeasure(direction = "width", measure, ratio) {

      let width = 0
      let height = 0

      switch (direction) {
        case "width":
          width = measure
          height = measure / ratio
          break
        case "height":
          height = measure
          width = measure * ratio
          break
      }

      return {
        width, height
      }

    },

    adjustImageSizes() {

      let imageWidth = this.$refs.photo.naturalWidth
      let imageHeight = this.$refs.photo.naturalHeight
      let imageRatio = imageWidth / imageHeight

      let imageSize = {}


      switch (this.fit) {
        case "smart":
          let direction = this.aspectRatioCons > imageRatio ? "width" : "height"
          imageSize = this.calculateEdgeMeasure(direction, this.containerWidth, imageRatio)
          break
        case "width":
          imageSize = this.calculateEdgeMeasure("width", this.containerWidth, imageRatio)
          break
        case "height":
          imageSize = this.calculateEdgeMeasure("height", this.containerWidth, imageRatio)
          break
      }

      this.imageWidth = imageSize.width
      this.imageHeight = imageSize.height

    },
    updateImagePos() {
      this.imageXPos = this.imagePos.xPos
      this.imageYPos = this.imagePos.yPos
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



