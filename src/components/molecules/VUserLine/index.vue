<template>
  <div>
    <div class="image">
      <VImage url="https://fakeimg.pl/200x200/?text=Photo&font=lobster" :width="64" rounded/>
    </div>
    <div class="titles">
      <p>Title</p>
      <p>SubTitle</p>
    </div>
    <div class="button">button</div>
  </div>
</template>


<script>


import VImage from '@/components/atoms/VImage'

export default {
  name: "VUserLine",
  components: {
    VImage
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    photo: {
      type: String,
      default: ""
    },
  }
}
</script>

<style lang="sass" scoped>
  div:first-child
    display: flex
    align-items: center
    .titles
      flex-grow: 1
      padding:
        left: 10px
    p
      margin: 0
</style>


