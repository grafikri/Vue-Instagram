<template>
  <div class="v-o-vertical-suggest-user">
    <div class="container">
      <div class="box" v-for="(user, index) in users" :key="index">
        <VUserCard :id="user.id" :name="user.name" :desc="user.desc"/>
      </div>
    </div>
  </div>
</template>

<script>

import VUserCard from '@/components/organisms/VUserCard'

export default {
  name: "VVerticalSuggestUser",
  components: {
    VUserCard
  },
  props: {
    users: Array
  }
}
</script>

<style lang="sass" scoped>
  .v-o-vertical-suggest-user
    .container
      box-sizing: border-box
      width: 100%
      padding:
        left: 40px
      overflow: scroll
      display: flex
    .box
      min-width: 180px
      margin:
        right: 30px
</style>