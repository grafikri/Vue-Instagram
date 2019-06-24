<template>
  <div class="v-a-show-case">
    <div class="container" v-for="(items, index) in itemsGroup" :key="index">
      <div class="row" v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="item">
          <VPhotoCard
            :url="item.photo"
            :likeCount="item.likeCount"
            :commentCount="item.commentCount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VPhotoCard from '@/components/molecules/VPhotoCard';

export default {
  name: "VShowCase",
  created() {

  },
  props: {
    items: Array,
    group: {
      type: [String, Number],
      default: 3
    }
  },
  computed: {
    itemsGroup() {
      return this.calculateGroup(this.group, this.items)
    }
  },
  components: {
    VPhotoCard
  },
  methods: {
    calculateGroup(amount, data) {


      let subData = []
      let allData = []
      for (let index in data) {
        let item = data[index]

        subData.push(item)

        if (subData.length == amount) {
          allData.push(subData)
          subData = []
        } else if (data.length - 1 == index) {
          allData.push(subData)
        }
      }


      return allData
    }
  },
}
</script>

<style lang="sass" scoped>
  .v-a-show-case
    margin: -10px
    .container
      display: flex
      .row
        flex-grow: 1
        .item
          margin: 10px
          

</style>