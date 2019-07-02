<template>
  <div class="v-p-home">
    <VTimeLine
      :suggestions_user="suggestions"
      :stories_user="stories"
      :timeLinePosts="timeline"
      :auth="auth"
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
    this.fetchPopularPeople()
  },
  methods: {
    ...mapActions({
      fetchPopularPeople: 'timeline/fetchPopularPeople'
    })
  },
  computed: {
    ...mapState(["suggestions_user"]),
    ...mapGetters({
      suggestions: 'suggestions/lastUsers',
      stories: 'stories/lastStories',
      auth: 'auth/auth',
      timeline: 'timeline/fetchPosts'
    })
  },
}
</script>
