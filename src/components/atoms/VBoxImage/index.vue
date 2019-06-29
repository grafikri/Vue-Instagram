<template>
  <div class="v-a-box-image" ref="container" :style="containerStyle">
    <img ref="image" :style="imageStyle" :src="url">
  </div>
</template>

<script>

import imagesLoaded from 'imagesloaded'

export default {
  name: "VBoxImage",
  data() {
    return {
      containerHeight: 0,
      imageHeight: 0,
      imageWidth: 0,
      imageLeftPos: 0,
      imageTopPos: 0,
      resizeId: 0,
      imageRealWidth: 0,
      imageRealHeight: 0,
      imageShow: false
    }
  },
  computed: {
    containerStyle() {
      return {
        height: this.containerHeight + "px",
      }
    },
    imageStyle() {
      return {
        height: this.imageWidth == 0 ? this.imageHeight + "px" : "initial",
        width: this.imageHeight == 0 ? this.imageWidth + "px" : "100%",
        marginLeft: this.imageLeftPos + "px",
        marginTop: this.imageTopPos + "px",
        //display: this.imageShow ? "inline-block" : "none"

      }
    }
  },
  props: {
    url: String,
    ratio: {
      type: Number,
      default: 1 / 1
    }
  },
  mounted() {

    imagesLoaded(this.$refs.image, () => {

      this.imageRealWidth = this.$refs.image.naturalWidth
      this.imageRealHeight = this.$refs.image.naturalHeight
      this.updateBoxSize()
      this.imageShow = true

    })

    this.updateBoxSize()
    window.addEventListener("resize", this.detectWindowSize)
  },
  destroyed() {
    window.removeEventListener("resize", this.detectWindowSize)
  },
  methods: {
    detectWindowSize() {
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(this.updateBoxSize, 0);
    },
    updateBoxSize() {

      this.containerHeight = this.$refs.container.offsetWidth / this.ratio
      this.imageHeight = this.containerHeight

      let containerWidth = this.containerHeight * this.ratio
      let containerHeight = this.containerHeight

      let imageRealRatio = this.imageRealWidth / this.imageRealHeight
      let direction = this.ratio > imageRealRatio ? "width" : "height"

      if (direction == "width") {

        this.imageWidth = "100%"
        this.imageHeight = 0

        let imageVirtualHeight = containerWidth / imageRealRatio
        let diff = imageVirtualHeight - containerHeight
        this.imageTopPos = (diff / 2) * (-1)

      } else {

        this.imageHeight = containerHeight
        this.imageWidth = 0

        let imageVirtualWidth = containerHeight * imageRealRatio
        let diff = imageVirtualWidth - containerWidth
        this.imageLeftPos = (diff / 2) * (-1)

      }



    }
  }
}
</script>

<style lang="sass" scoped>
  .v-a-box-image
    width: 100%
    overflow: hidden
    // background: red
    background-repeat: no-repeat
    background-size: auto

</style>