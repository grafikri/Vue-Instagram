<template>
  <div class="v-o-member-box">
    <div class="header-container" ref="header">
      <VHeader :minify="minify"/>
    </div>
    <div class="space" ref="space"></div>
    <VLayout>
      <div class="container">
        <slot></slot>
      </div>

      <div class="footer">
        <VFooter
          :links="[{ title: 'About Us', link: '/about'}, { title: 'Support', link: '/support'},{ title: 'Support', link: '/support'},{ title: 'Support', link: '/support'},{ title: 'Support', link: '/support'},{ title: 'Support', link: '/support'},{ title: 'Support', link: '/support'},{ title: 'Support', link: '/support'}]"
        />
      </div>
    </VLayout>
  </div>
</template>

<script>

import VHeader from '@/components/organisms/VHeader'
import VLayout from '@/components/atoms/VLayout'
import VFooter from '@/components/organisms/VFooter'

export default {
  name: "VMemberBox",
  components: {
    VHeader,
    VLayout,
    VFooter
  },
  data() {
    return {
      minify: false
    }
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
  .v-o-member-box
    .header-container
      position: fixed
      z-index: 99
      width: 100%
    .container, .footer
      box-sizing: border-box
      padding:
        left: 15px
        right: 15px
    .footer
      margin:
        top: 35px
        bottom: 50px
    .space
      height: 130px
</style>
