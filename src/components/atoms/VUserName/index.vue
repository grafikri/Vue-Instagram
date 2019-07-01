<template>
  <div class="v-a-user-name">
    <p :style="textStyle" :class="lines ? 'lineCountActive': ''">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "VUserName",
  props: {
    lines: {
      type: [Number, Boolean],
      default: false
    },
  },
  computed: {
    textStyle() {
      return {
        "webkitLineClamp": this.lines ? this.lines : "initial"
      }
    }
  },
}
</script>


<style lang="sass" scoped>
  .v-a-user-name
    p
      color: $dark-text-color
      font-size: 14px
      font-weight: 600
      margin: 0
      &.lineCountActive
        @include customDot(1)
    
</style>

