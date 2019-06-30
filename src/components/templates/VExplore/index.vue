<template>
  <div class="v-t-explore">
    <VMemberBox>
      <div class="top-title">
        <div class="left">
          <VMiniTitle>Yeni insanları keşfet</VMiniTitle>
        </div>
        <div class="right">
          <VButton primary>Tümünü Gör</VButton>
        </div>
      </div>

      <!-- <VVerticalSuggestUser :users="users"/> -->

      <div class="space"></div>

      <div class="explore-title">
        <VMiniTitle>Keşfet</VMiniTitle>
      </div>

      <VShowCase :items="explore"/>
    </VMemberBox>
  </div>
</template>

<script>

import VMemberBox from '@/components/organisms/VMemberBox'
import VVerticalSuggestUser from '@/components/organisms/VVerticalSuggestUser'
import VMiniTitle from '@/components/atoms/VMiniTitle'
import VShowCase from '@/components/organisms/VShowCase'
import VButton from '@/components/atoms/VButton'

export default {
  name: "VExplore",
  components: {
    VMemberBox,
    VMiniTitle,
    VButton,
    VVerticalSuggestUser,
    VShowCase
  },
  props: {
    users: Array,
    explore: Array
  }
}
</script>

<style lang="sass" scoped>
  .v-t-explore
    .top-title
      display: flex
      align-items: center
      margin:
        bottom: 30px
      .left
        flex-grow: 1
    .space
      height: 90px
    .explore-title
      margin:
        bottom: 20px
        
</style>