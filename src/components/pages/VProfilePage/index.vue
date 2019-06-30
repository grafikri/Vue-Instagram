<template>
  <div class="v-p-profile-page">
    <VProfile :user="user" :posts="posts" :saved="saved"/>
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

    let userId = this.$route.name == "auth" ? this.$store.state.auth.auth.id : this.$route.params.id

    this.fetchUser({ id: userId })
    this.fetchPosts({ id: userId })
  },
  methods: {
    ...mapActions({ fetchUser: 'user/fetchUser', fetchPosts: 'posts/fetchPosts' })
  },
  computed: mapState({
    user: 'user',
    'posts': state => state.posts.items.map((post) => {
      return {
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