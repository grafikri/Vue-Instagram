<template>
  <div class="v-t-time-line">
    <div class="header-container" ref="header">
      <VHeader :minify="minify"/>
    </div>
    <div class="space" ref="space"></div>
    <VLayout>
      <div class="container">
        <div class="left">
          <div class="post-container" v-for="(content, index) in timeLinePosts" :key="index">
            <VPost :post="content.post" :user="content.user"/>
          </div>
        </div>
        <div class="right">
          <div class="section">
            <VUserLine
              photo="https://fakeimg.pl/200x200/?text=Photo&font=lobster"
              name="grafikri"
              desc="Serhan"
              :size="52"
            />
          </div>
          <div class="section">
            <VUserBrowse :scroll="100" title="Stories" :users="users"/>
          </div>
          <div class="section">
            <VUserBrowse title="Suggestions for you" :users="users"/>
          </div>
        </div>
      </div>
    </VLayout>
  </div>
</template>

<script>

import VHeader from '@/components/organisms/VHeader'
import VPost from '@/components/organisms/VPost'
import VLayout from '@/components/atoms/VLayout'
import VUserLine from '@/components/molecules/VUserLine'
import VUserBrowse from '@/components/organisms/VUserBrowse'



export default {
  name: "VTimeLine",
  components: {
    VUserBrowse,
    VLayout,
    VUserLine,
    VHeader,
    VPost
  },
  data() {
    return {
      minify: false
    }
  },
  props: {
    users: Array,
    timeLinePosts: Array
  },
  created() {
    window.addEventListener('scroll', this.watchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll() {
      let headerHeight = this.$refs.header.getBoundingClientRect().height
      let spaceHeight = this.$refs.space.getBoundingClientRect().height
      let spaceTop = this.$refs.space.getBoundingClientRect().top
      let diff = headerHeight - spaceHeight

      this.minify = spaceTop < diff
    }
  }
}
</script>


<style lang="sass" scoped>
  .v-t-time-line
    .header-container
      position: fixed
      width: 100%
    .space
      height: 130px
    .container
      display: flex
      padding:
        left: 10px
        right: 10px
      .left
        flex-grow: 1
        .post-container
          margin:
            bottom: 60px
      .right
        width: 290px
        padding:
          left: 30px
        .section
          margin:
            bottom: 15px

</style>
