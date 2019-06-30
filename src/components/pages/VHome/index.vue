<template>
  <div class="v-p-home">
    <VTimeLine
      :suggestions_user="suggestions_user"
      :stories_user="stories"
      :timeLinePosts="timeline"
      :auth="auth"
    />
  </div>
</template>

<script>

import { mapState, mapGetters } from "vuex"
import VTimeLine from "@/components/templates/VTimeLine"

export default {
  name: "VHome",
  components: {
    VTimeLine
  },
  computed: {
    ...mapState(["timeline", "suggestions_user"]),
    ...mapGetters({
      stories: 'stories/lastStories',
      auth: 'auth/auth'
    })
  },
}
</script>
