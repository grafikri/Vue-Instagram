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
      imageWidth: 100,
      imageLeftPos: 0,
      imageTopPos: 0,
      imageRealWidth: 0,
      imageRealHeight: 0,
      imageShow: false
    }
  },
  computed: {
    containerStyle() {
      return {
        height: this.containerHeight + "px",
        borderRadius: this.rounded ? "9999999px" : "initial"
      }
    },
    imageStyle() {
      return {
        height: this.imageHeight + "px",
        width: this.imageWidth + "%",
        marginLeft: this.imageLeftPos + "%",
        marginTop: this.imageTopPos + "px",
        visibility: this.imageShow ? "" : "hidden"

      }
    }
  },
  props: {
    url: String,
    rounded: Boolean,
    ratio: {
      type: Number,
      default: 1 / 1
    }
  },
  watch: {
    url(newValue, oldValue) {
      this.getImage()
    }
  },
  mounted() {
    this.getImage()
    this.updateBoxSize()
    window.addEventListener("resize", this.updateBoxSize)
  },
  destroyed() {
    window.removeEventListener("resize", this.updateBoxSize)
  },
  methods: {
    getImage() {
      imagesLoaded(this.$refs.image, () => {

        this.imageRealWidth = this.$refs.image.naturalWidth
        this.imageRealHeight = this.$refs.image.naturalHeight
        this.updateBoxSize()
        this.imageShow = true

      })
    },
    updateBoxSize() {

      if (this.imageRealWidth == 0) {
        return
      }

      this.containerHeight = this.$refs.container.offsetWidth / this.ratio

      let containerWidth = this.containerHeight * this.ratio
      let containerHeight = this.containerHeight

      let imageRealRatio = this.imageRealWidth / this.imageRealHeight

      let imageVirtualHeight = containerWidth / imageRealRatio
      this.imageHeight = imageVirtualHeight
      let diff = imageVirtualHeight - containerHeight
      this.imageTopPos = (diff / 2) * (-1)


      if (diff < 0) {
        this.imageHeight = imageVirtualHeight + (diff * -1)
        this.imageTopPos = 0

        this.imageWidth = 100 * this.imageHeight * imageRealRatio / containerWidth

        this.imageTopPos = 0
        this.imageLeftPos = ((this.imageWidth - 100) / 2) * -1
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