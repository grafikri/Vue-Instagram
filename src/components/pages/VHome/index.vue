<template>
  <div class="v-p-home">
    <VTimeLine
      :suggestions_user="suggestions"
      :stories_user="stories"
      :timeLinePosts="timeline"
      :auth="auth"
      :pageLoading="pageLoading"
    />
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from "vuex"
import VTimeLine from "@/components/templates/VTimeLine"

export default {
  name: "VHome",
  components: {
    VTimeLine
  },
  created() {
    this.setupPage()
  },
  methods: {
    setupPage() {
      this.$store.commit('app/updatePageStatus', { pageVisible: false })
      this.$store.dispatch('timeline/fetchPopularPeople').then(() => {
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
      suggestions: 'suggestions/lastUsers',
      stories: 'stories/lastStories',
      auth: 'auth/auth',
      timeline: 'timeline/fetchPosts'
    })
  },
}
</script>
