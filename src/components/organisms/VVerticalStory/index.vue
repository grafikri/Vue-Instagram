<template>
  <div class="v-m-vertical-story">
    <div class="header">
      <p>Stories</p>
      <p>Watch All</p>
    </div>
    <div class="body">
      <div :key="index" v-for="(user, index) in users" class="line">
        <VUserLine :photo="user.photo" :name="user.name" :desc="user.desc" :size="40"/>
      </div>
    </div>
  </div>
</template>

<script>

import VUserLine from '@/components/molecules/VUserLine'

export default {
  name: "VVerticalStory",
  components: {
    VUserLine
  },
  props: {
    users: Array
  }
}
</script>


<style lang="sass" scoped>

  .v-m-vertical-story
    @extend %box-style
    background: white
    padding:
      left: 15px
      right: 15px
    .header
        display: flex
        padding:
          top: 10px
          bottom: 10px
        p
          flex-grow: 1
          font-size: 14px
          font-weight: bold
          margin: 0
          &:first-child
            color: #999
          &:last-child
            text-align: right
    .body
      height: 225px
      overflow: auto
      .line
        margin:
          top: 12px
          bottom: 12px
        &:first-child
          margin:
            top: 0
</style>

