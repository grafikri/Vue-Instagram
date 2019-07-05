<template>
  <div class="v-p-profile-page">
    <VProfile :user="user" :posts="posts" :saved="saved" :pageLoading="pageLoading" />
  </div>
</template>

<script>

import { mapState, mapActions } from "vuex"
import VProfile from '@/components/templates/VProfile'

export default {
  name: "VProfilePage",
  components: {
    VProfile,
  },
  created() {
    this.setupPage()
  },
  methods: {
    setupPage() {
      let userId = this.$route.name == "auth" ? this.$store.state.auth.auth.id : this.$route.params.id

      this.$store.commit('app/updatePageStatus', { pageVisible: false })
      this.$store.dispatch('user/fetchUser', { id: userId }).then(() => {
        return this.$store.dispatch('posts/fetchPosts', { id: userId })
      }).then(() => {
        this.$store.commit('app/updatePageStatus', { pageVisible: true })
      }).catch(() => {

      })
    }
  },
  computed: mapState({
    user: 'user',
    pageLoading: state => state.app.showPage ? false : true,
    'posts': state => state.posts.items.map((post) => {
      return {
        id: post.id,
        photo: post.photo.thumb,
        likeCount: post.amount.like,
        commentCount: post.amount.comment
      }
    }),
    'saved': state => state.saved.map((post) => {
      return {
        photo: post.photo.thumb,
        likeCount: post.amount.like,
        commentCount: post.amount.comment
      }
    }),
  }),

}
</script>

<style lang="sass" scoped>
  // .v-p-profile-page
    
</style>