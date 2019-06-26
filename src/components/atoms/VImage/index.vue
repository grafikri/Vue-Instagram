<template>
  <img class="v-a-image" :style="styleObject" :src="url">
</template>

<script>
export default {
  name: "VImage",
  props: {
    url: String,
    width: [String],
    height: [String],
    rounded: Boolean,
    aspectRatio: Boolean
  },
  computed: {
    styleObject() {

      let borderRadius = this.rounded ? 999999 + "px" : 'inherit'

      return {
        borderRadius: borderRadius,
        ...this.calculateWidthHeight()
      }
    }
  },
  methods: {
    calculateWidthHeight() {

      let width = this.width ? this.width : "initial"
      let height = this.height ? this.height : "initial"

      if (this.aspectRatio) {
        if (this.width) {
          height = "initial"
        } else if (this.height) {
          width = "initial"
        }
      }

      return {
        width: width, height: height
      }

    }
  },
}
</script>

<style lang="sass" scoped>

</style>



