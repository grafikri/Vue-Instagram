<template>
  <div class="v-t-app-loading">
    <div class="container">
      <VLogo />
    </div>
  </div>
</template>

<script>
import VLogo from '@/components/atoms/VLogo'
export default {
  name: "VAppLoading",
  components: {
    VLogo,
  },
}
</script>

<style lang="sass" scoped>
  .v-t-app-loading
    height: 100vh
    display: flex
    .container
      margin: auto
</style>