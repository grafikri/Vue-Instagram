<template>
  <div class="v-t-time-line">
    <VMemberBox :isLoading="pageLoading">
      <div class="container">
        <div class="left">
          <div class="post-container" v-for="(content, index) in timeLinePosts" :key="index">
            <VPost :post="content.post" :user="content.user" />
          </div>
        </div>
        <div class="right">
          <div class="inner" v-bind:class="{active : isFixed}">
            <div class="section">
              <VUserLine
                :id="auth.id"
                :photo="auth.photo"
                :name="auth.name"
                :desc="auth.full_name"
                :size="52"
              />
            </div>
            <div class="section">
              <VUserBrowse :scroll="180" title="Stories" :users="stories_user" />
            </div>
            <div class="section">
              <VUserBrowse title="Suggestions for you" :users="suggestions_user" />
            </div>
            <div class="section">
              <VMiniFooter />
            </div>
          </div>
        </div>
      </div>
    </VMemberBox>
  </div>
</template>

<script>

import VMemberBox from '@/components/organisms/VMemberBox'
import VPost from '@/components/organisms/VPost'
import VUserBrowse from '@/components/organisms/VUserBrowse'
import VUserLine from '@/components/molecules/VUserLine'
import VMiniFooter from '@/components/molecules/VMiniFooter'

export default {
  name: "VTimeLine",
  data() {
    return {
      isFixed: false // It provides anchor
    }
  },
  components: {
    VMemberBox,
    VPost,
    VUserBrowse,
    VUserLine,
    VMiniFooter
  },
  props: {
    suggestions_user: Array,
    stories_user: Array,
    timeLinePosts: Array,
    auth: Object,
    pageLoading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    detectScroll(e) {
      this.isFixed = window.scrollY > 52
    }
  },
  created() {
    window.addEventListener('scroll', this.detectScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.detectScroll)
  },
}
</script>


<style lang="sass" scoped>
  .v-t-time-line
    position: relative
    .container
      display: flex
      .left
        flex-grow: 1
        .post-container
          margin:
            bottom: 60px
      .right
        width: 290px
        padding:
          left: 30px
        .inner.active
          width: inherit
          position: fixed
          top: 78px
        .section
          margin:
            bottom: 15px

  

</style>
