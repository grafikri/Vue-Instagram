<template>
  <div>
    <VMemberBox>
      <VUserLargeViewer/>

      <VTabsHorizontal>
        <VTabText @click="handleClickPost" :active="postTab" icon="grid" text="GÖNDERİLER"/>
        <VTabText @click="handleClickIGTV" :active="igtvTab" icon="igtv" text="IGTV"/>
        <VTabText @click="handleClickSaved" :active="savedTab" icon="saved" text="KAYDEDİLENLER"/>
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

import VEmptyPost from '@/components/organisms/VEmptyPost'
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
  components: {
    VMemberBox,
    VUserLargeViewer,
    VTabsHorizontal,
    VTabText,
    VEmptyPost
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
          return "VEmptyPost"
        case "igtv":
          return "VTabText"
        case "saved":
          return "VTabText"
        case "tagged":
          return "VTabText"
      }
    },
    currentContentProps() {
      switch (this.currentTab) {
        case "post":
          return { title: "Start capturing and sharing your moments.", desc: "Get the app to share your first photo or video." }
        case "igtv":
          return {}
        case "saved":
          return {}
        case "tagged":
          return {}
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