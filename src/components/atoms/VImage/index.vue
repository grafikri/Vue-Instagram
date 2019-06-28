<template>
  <div class="v-a-image" :style="containerStyle">
    <!-- <img ref="photo" class="v-a-image" :style="styleObject" :src="url"> -->
  </div>
  <!-- <VImage aspectRatio="1" width="100px" /> -->
</template>

<script>
export default {
  name: "VImage",
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
  mounted() {
    console.log("this: ", this.$el.parentNode.offsetWidth)
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
</style>



