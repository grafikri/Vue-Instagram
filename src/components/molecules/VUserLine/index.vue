<template>
  <div class="v-m-user-line">
    <div class="image">
      <VImage v-if="photo" :url="photo" :width="size + 'px'" rounded/>
    </div>
    <div class="titles">
      <p class="name" v-if="name">{{ name }}</p>
      <p class="desc" v-if="desc">{{ desc }}</p>
    </div>
    <div class="button"></div>
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
    name: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    photo: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 48
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-m-user-line
    display: flex
    align-items: center
    .image
      line-height: 0
    .titles
      flex-grow: 1
      padding:
        left: 10px
    p
      margin: 0
      &.name
        font-size: 14px
        font-weight: 600
        margin:
          bottom: 2px
      &.desc
        font-size: 12px
        line-height: 14px
        font-weight: inherit
        color: #999
      

</style>


