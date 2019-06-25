<template>
  <p :style="styleObject" class="v-a-text">engin şentürk</p>
</template>

<script>
export default {
  name: "VText",
  props: {
    size: {
      type: [Number, String],
      default: "14px"
    },
    bold: {
      type: [Number, String],
      default: "normal"
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log("this: ", this.styleObject)
  },
  computed: {
    styleObject() {

      let object = {
        fontSize: this.size,
        fontWeight: this.bold,
      }

      if (this.uppercase) {
        object.textTransform = "uppercase"
      }

      if (this.capitalize) {
        object.textTransform = "capitalize"
      }

      return object
    }
  },
}
</script>

<style lang="sass" scoped>
  .v-a-text
    margin: 0
    padding: 0
    display: inline-block
</style>