<template>
  <img class="v-a-image" :style="styleObject" :src="url">
</template>

<script>
export default {
  name: "VImage",
  props: {
    url: String,
    width: Number,
    rounded: Boolean
  },
  computed: {
    styleObject() {
      let width = this.width ? this.width + "px" : "100%"
      let borderRadius = this.rounded ? 999999 + "px" : 'inherit'

      return {
        borderRadius: borderRadius,
        width: width,
        height: width
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>



