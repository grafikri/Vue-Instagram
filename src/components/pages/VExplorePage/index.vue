<template>
  <div>
    <VExplore :explore="explore" :users="users" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import VExplore from '@/components/templates/VExplore'
export default {
  name: "VDiscover",
  created() {
    this.fetchPosts()
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchPosts: 'explore/fetchExplorePosts',
      fetchUsers: 'explore/fetchExploreUsers'
    })
  },
  computed: {
    ...mapGetters({
      explore: 'explore/fetchPosts',
      users: 'explore/fetchUsers',

    })
  },
  components: {
    VExplore
  }
}
</script>

<style lang="scss" scoped>
</style>