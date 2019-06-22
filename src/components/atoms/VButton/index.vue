<template>
  <component
    class="v-a-button"
    :disabled="passive"
    @click="handleClick"
    :href="href"
    :to="to"
    :is="buttonType"
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
    passive: Boolean
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
    padding: 0
    margin: 0
    text-decoration: none
    color: $primary-button-color
    background: none
    border: none
    font-size: 14px
    cursor: pointer
    font-weight: 600
    &:focus
      outline: none
</style>

