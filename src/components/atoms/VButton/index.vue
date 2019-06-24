<template>
  <component
    class="v-a-button"
    :disabled="passive"
    @click="handleClick"
    :href="href"
    :to="to"
    :is="buttonType"
    :primary="primary"
    :filled="filled"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "VButton",
  props: {
    href: String,
    to: [Object, String],
    click: Function,
    passive: Boolean,
    primary: Boolean,
    filled: Boolean

  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  computed: {
    buttonType() {
      if (this.href) return "a"
      if (this.to) return "router-link"
      return 'button'
    }
  }
}
</script>


<style lang="sass" scoped>
  .v-a-button
    display: inline-block
    padding: 0
    margin: 0
    color: $dark-text-color
    text-decoration: none
    background: none
    border: none
    font-size: 14px
    cursor: pointer
    font-weight: 600
    &:focus
      outline: none
    &[disabled]
      color: gray
    &[primary]
      color: $primary-button-color
    &[primary][filled]
      background: $primary-button-color
    &[filled]
      color: white
      padding:
        top: 5px
        bottom: 5px
        left: 9px
        right: 9px
      @extend %border-style
</style>

