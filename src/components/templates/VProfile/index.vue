<template>
  <div>
    <VMemberBox>
      <VUserLargeViewer/>

      <VTabsHorizontal>
        <VTabText @click="handleClick" icon="grid" text="GÖNDERİLER"/>
        <VTabText @click="handleClick" icon="igtv" text="IGTV"/>
        <VTabText @click="handleClick" icon="saved" text="KAYDEDİLENLER"/>
        <VTabText @click="handleClick" icon="tagged" text="ETİKETLENENLER"/>
      </VTabsHorizontal>
    </VMemberBox>
  </div>
</template>

<script>

import VMemberBox from '@/components/organisms/VMemberBox'
import VUserLargeViewer from '@/components/organisms/VUserLargeViewer'
import VTabsHorizontal from '@/components/organisms/VTabsHorizontal'
import VTabText from '@/components/molecules/VTabText'


export default {
  name: "VProfile",
  components: {
    VMemberBox,
    VUserLargeViewer,
    VTabsHorizontal,
    VTabText
  },
  methods: {
    handleClick() {

    }
  },
}
</script>

<style lang="scss" scoped>
</style>