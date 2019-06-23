<template>
  <div class="v-p-home">
    <VTimeLine
      :suggestions_user="suggestions_user"
      :stories_user="stories_user"
      :timeLinePosts="posts"
      :auth="auth"
    />
  </div>
</template>

<script>

import { mapState } from "vuex"
import VTimeLine from "@/components/templates/VTimeLine"

export default {
  name: "VHome",
  components: {
    VTimeLine
  },
  computed: {
    ...mapState(["posts", "suggestions_user", "stories_user", "auth"])
  },
}
</script>
