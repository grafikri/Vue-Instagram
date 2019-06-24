<template>
  <div>
    <VExplore :explore="explore" :users="users"/>
  </div>
</template>

<script>
import { mapState } from "vuex"
import VExplore from '@/components/templates/VExplore'
export default {
  name: "VDiscover",
  computed: {
    ...mapState({
      "explore": state => state.explore,
      "users": state => state.explore_new_user
    })
  },
  components: {
    VExplore
  }
}
</script>

<style lang="scss" scoped>
</style>