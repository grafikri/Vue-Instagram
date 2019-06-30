<template>
  <component class="v-a-link" :to="to" :is="component" :href="url" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "VLink",
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  computed: {
    component() {
      if (this.to) return 'router-link'
      if (this.url) return 'a'
      return 'a'
    }
  },
  props: {
    to: [String, Object],
    url: String
  },
}
</script>

<style lang="sass" scoped>
  .v-a-link
    font-size: 14px
    cursor: pointer
    line-height: 0
    display: block
    padding: 0
    margin: 0
    text-decoration: none
    background: none
    border: none
    &:focus
      outline: none
</style>