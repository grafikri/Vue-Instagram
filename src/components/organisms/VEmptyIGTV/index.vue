<template>
  <div class="v-o-empty-igtv">
    <div>
      <VIcon class="igtv"/>
    </div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div class="text">
      <VText>{{ desc }}</VText>
    </div>
    <div class="button">
      <VButton block primary filled>{{ btnText }}</VButton>
    </div>
  </div>
</template>

<script>

import VIcon from '@/components/atoms/VIcon'
import VText from '@/components/atoms/VText'
import VButton from '@/components/atoms/VButton'

export default {
  name: "VEmptyIGTV",
  components: {
    VIcon,
    VText,
    VButton
  },
  props: {
    title: String,
    desc: String,
    btnText: String
  },
}
</script>

<style lang="sass" scoped>
  .v-o-empty-igtv
    margin: auto
    margin:
      top: 60px
      bottom: 60px
    width: 350px
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    h1
      font-weight: 300
      font-size: 28px
    .text
      margin:
        bottom: 20px
    .button
      width: 100px


</style>