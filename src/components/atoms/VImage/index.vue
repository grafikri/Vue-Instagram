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

      let imageWidth = this.$refs.photo.offsetWidth
      let imageHeight = this.$refs.photo.offsetHeight

      let containerWidth = this.$refs.container.offsetWidth
      let containerHeight = this.$refs.container.offsetHeight


      let position = "center"

      let xDiff = imageWidth - containerWidth
      let yDiff = imageHeight - containerHeight

      let xPos = xDiff / 2
      let yPos = yDiff / 2
      this.imageStyle = {
        marginLeft: (xPos * -1) + "px",
        marginTop: (yPos * -1) + "px"
      }

      console.log("container: ", containerWidth, containerHeight)
      console.log("image: ", imageWidth, imageHeight)

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


  }
}
</script>

<style lang="sass" scoped>
  .v-a-image
    background: red
    margin: auto
</style>



