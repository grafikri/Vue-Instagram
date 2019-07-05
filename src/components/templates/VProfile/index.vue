<template>
  <div>
    <VMemberBox :isLoading="pageLoading">
      <VUserLargeViewer
        :photo="user.avatar"
        :name="user.name"
        :desc="user.desc"
        :posts="{text: 'posts', count: user.quantity.posts}"
        :followers="{text: 'followers', count: user.quantity.followers}"
        :followings="{text: 'followings', count: user.quantity.followings}"
      />

      <VTabsHorizontal>
        <VTabText @click="handleClickPost" :active="postTab" icon="grid" text="GÖNDERİLER" />
        <VTabText @click="handleClickIGTV" :active="igtvTab" icon="igtv" text="IGTV" />
        <VTabText @click="handleClickSaved" :active="savedTab" icon="saved" text="KAYDEDİLENLER" />
        <VTabText
          @click="handleClickTagged"
          :active="taggedTab"
          icon="tagged"
          text="ETİKETLENENLER"
        />
      </VTabsHorizontal>

      <component v-bind:is="currentContent" v-bind="currentContentProps"></component>
    </VMemberBox>
  </div>
</template>

<script>

import VShowCase from '@/components/organisms/VShowCase'
import VEmptyPost from '@/components/organisms/VEmptyPost'
import VEmptyIGTV from '@/components/organisms/VEmptyIGTV'
import VMemberBox from '@/components/organisms/VMemberBox'
import VUserLargeViewer from '@/components/organisms/VUserLargeViewer'
import VTabsHorizontal from '@/components/organisms/VTabsHorizontal'
import VTabText from '@/components/molecules/VTabText'


export default {
  name: "VProfile",
  data() {
    return {
      currentTab: "post"
    }
  },
  props: {
    user: Object,
    posts: {
      type: Array,
      default() {
        return []
      }
    },
    saved: {
      type: Array,
      default() {
        return []
      }
    },
    pageLoading: {
      type: Boolean,
      default: true
    }
  },
  components: {
    VMemberBox,
    VUserLargeViewer,
    VTabsHorizontal,
    VTabText,
    VEmptyPost,
    VEmptyIGTV,
    VShowCase
  },
  computed: {
    postTab() {
      return this.currentTab == "post"
    },
    igtvTab() {
      return this.currentTab == "igtv"
    },
    savedTab() {
      return this.currentTab == "saved"
    },
    taggedTab() {
      return this.currentTab == "tagged"
    },
    currentContent() {
      switch (this.currentTab) {
        case "post":
          return this.posts ? "VShowCase" : "VEmptyPost"
        case "igtv":
          return "VEmptyIGTV"
        case "saved":
          return this.saved ? "VShowCase" : "VEmptyPost"
        case "tagged":
          return "VEmptyPost"
      }
    },
    currentContentProps() {
      switch (this.currentTab) {
        case "post":
          if (this.posts) {
            return { items: this.posts }
          } else {
            return { title: "Start capturing and sharing your moments.", desc: "Get the app to share your first photo or video." }
          }

        case "igtv":
          return {
            title: "Upload a Video",
            desc: "Videos must be between 15 seconds and 10 minutes long.",
            btnText: "Upload"
          }
        case "saved":
          if (this.saved) {
            return { items: this.saved }
          } else {
            return { title: "Start capturing and sharing your moments.", desc: "Get the app to share your first photo or video." }
          }
        case "tagged":
          return { title: "Start capturing and sharing your moments.", desc: "Get the app to share your first photo or video." }
      }
    },

  },
  methods: {
    handleClickPost(event) {
      this.currentTab = "post"
    },
    handleClickIGTV(event) {
      this.currentTab = "igtv"
    },
    handleClickSaved(event) {
      this.currentTab = "saved"
    },
    handleClickTagged(event) {
      this.currentTab = "tagged"
    },
  },
}
</script>

<style lang="scss" scoped>
</style>