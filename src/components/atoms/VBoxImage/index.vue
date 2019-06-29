<template>
  <div class="v-a-box-image" ref="container" :style="containerStyle">
    <img ref="image" :style="imageStyle" :src="url">
  </div>
</template>

<script>
export default {
  name: "VBoxImage",
  data() {
    return {
      containerHeight: 0,
      imageHeight: 0,
      imageWidth: 0,
      imageLeftPos: 0,
      imageTopPos: 0,
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
        width: this.imageHeight == 0 ? this.imageWidth + "px" : "initial",
        marginLeft: this.imageLeftPos + "px",
        marginTop: this.imageTopPos + "px",

      }
    }
  },
  props: {
    url: String
  },
  mounted() {
    //this.updateBoxSize()
    window.addEventListener("resize", this.updateBoxSize)
  },
  destroyed() {
    window.removeEventListener("resize", this.updateBoxSize)
  },
  methods: {
    updateBoxSize() {

      this.containerHeight = this.$refs.container.offsetWidth
      this.imageHeight = this.containerHeight

      let imageWidth = this.$refs.image.offsetWidth
      let imageHeight = this.$refs.image.offsetHeight



      if (imageWidth == 0 && imageHeight == 0) {

      } else if (imageWidth > imageHeight) {
        this.imageHeight = this.containerHeight
        let diff = this.$refs.image.offsetWidth - this.containerHeight
        this.imageLeftPos = (diff / 2) * (-1)
      } else {
        this.imageHeight = 0
        this.imageWidth = this.containerHeight
        let diff = this.$refs.image.offsetHeight - this.containerHeight
        this.imageTopPos = (diff / 2) * (-1)
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