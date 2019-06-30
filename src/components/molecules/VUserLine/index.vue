<template>
  <div class="v-m-user-line">
    <div class="image" :style="{ width: size + 'px'}">
      <VLink :to="{ name: 'profile', params: {id: id}}">
        <VBoxImage v-if="photo" :url="photo" rounded/>
      </VLink>
    </div>
    <div class="titles">
      <VLink :to="{ name: 'profile', params: {id: id}}">
        <p class="name" v-if="name">{{ name }}</p>
        <p class="desc" v-if="desc">{{ desc }}</p>
      </VLink>
    </div>
    <div class="button"></div>
  </div>
</template>


<script>


import VLink from '@/components/atoms/VLink'
import VBoxImage from '@/components/atoms/VBoxImage'


export default {
  name: "VUserLine",
  components: {
    VBoxImage,
    VLink
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
    },
    id: {
      type: [String, Number],
      default: 0
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
      color: $dark-text-color
      line-height: initial
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


