<template>
  <div>
    <VExplore :explore="explore" :users="users" :pageLoading="pageLoading" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import VExplore from '@/components/templates/VExplore'
export default {
  name: "VDiscover",
  created() {
    this.setupPage()
  },
  methods: {
    setupPage() {
      this.$store.commit('app/updatePageStatus', { pageVisible: false })
      this.$store.dispatch('explore/fetchExplorePosts').then(() => {
        return this.$store.dispatch('explore/fetchExploreUsers')
      }).then(() => {
        this.$store.commit('app/updatePageStatus', { pageVisible: true })
      }).catch(() => {

      })
    }
  },
  computed: {
    ...mapState({
      pageLoading: state => state.app.showPage ? false : true,
    }),
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