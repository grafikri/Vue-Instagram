<template>
  <div class="v-t-time-line">
    <VLayout>
      <div class="container">
        <div class="left">Timeline</div>
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

import VLayout from '@/components/atoms/VLayout'
import VUserLine from '@/components/molecules/VUserLine'
import VUserBrowse from '@/components/organisms/VUserBrowse'



export default {
  name: "VTimeLine",
  components: {
    VUserBrowse,
    VLayout,
    VUserLine
  },
  props: {
    users: Array
  }
}
</script>


<style lang="sass" scoped>
  .v-t-time-line
    .container
      display: flex
      .left
        flex-grow: 1
      .right
        width: 324px
        padding:
          left: 30px
        .section
          margin:
            bottom: 15px

</style>
