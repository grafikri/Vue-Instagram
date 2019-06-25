<template>
  <div class="v-m-user-large-title">
    <div class="title">
      <h1>{{ name }}</h1>
    </div>
    <div class="elems">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VUserLargeTitle",
  props: {
    name: String, // user name
  },
}
</script>

<style lang="sass" scoped>
  .v-m-user-large-title
    display: flex
    align-items: center
    .title
      h1
        margin: 0
        color: $dark-text-color
        font-weight: 300
        font-size: 28
    .elems
      *
        margin:
          left: 15px
</style>