<template>
  <div class="v-o-post" ref="post">
    <div class="header">
      <VUserLine :desc="user.desc" :photo="user.photo" :name="user.name" :size="32" :id="user.id" />
    </div>
    <div class="body">
      <VBoxImage :ratio="1/1" :url="post.photo" />

      <div class="tools">
        <div class="left">
          <div>
            <VIcon class="fav" />
          </div>
          <div>
            <VIcon class="comment" />
          </div>
        </div>
        <div class="right">
          <VIcon class="bookmark" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="comments">
        <p class="view-info">{{ post.viewCount }} viewing</p>
        <VComment :name="user.name" :comment="user.comment" :id="user.id" />
        <p class="comment-count">View all {{ post.comments.count }} comments</p>

        <VComment
          v-for="(item, index) in post.comments"
          :key="index"
          :name="item.name"
          :comment="item.comment"
        />

        <span class="date">{{ post.date }}</span>
      </div>
      <div class="border"></div>
      <div class="share-input">
        <div>
          <VPostCommentInput @submit="submit" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import VIcon from '@/components/atoms/VIcon'
import VImage from '@/components/atoms/VImage'
import VBoxImage from '@/components/atoms/VBoxImage'
import VComment from '@/components/molecules/VComment'
import VUserLine from '@/components/molecules/VUserLine'
import VPostCommentInput from "@/components/molecules/VPostCommentInput"

export default {
  name: "VPost",
  components: {
    VPostCommentInput,
    VUserLine,
    VComment,
    VImage,
    VBoxImage,
    VIcon
  },
  data() {
    return {
      imageWidth: 0
    }
  },
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: '',
          photo: '',
          comment: ''
        }
      }
    },
    post: {
      type: Object,
      default() {
        return {
          photo: '',
          date: '',
          viewCount: 0,
          comments: {
            count: 0,
            list: [{
              name: '',
              comment: ''
            }]
          }
        }
      }
    },
  },
  created() {

  },
  mounted() {
    this.getWindowSize()
    window.addEventListener("resize", this.getWindowSize)
  },
  destroyed() {
    window.removeEventListener("resize", this.getWindowSize)
  },
  methods: {
    submit(text) {
      console.log("submit: ", text)
    },
    getWindowSize() {
      this.imageWidth = this.$refs.post.offsetWidth - 2
    }
  }
}
</script>


<style lang="sass" scoped>

  $distance: 14px
  $font-size: 14px

  .v-o-post
    @extend %box-style
    background: white
    margin: auto
    max-width: 600px
    .header
      padding: 10px
    .body
      .tools
        margin:
          top: 10px
        padding:
          left: $distance
          right: $distance
        display: flex
        .left
          display: flex
          flex-grow: 1
          div
            margin:
              right: 10px
          
    .footer
      padding:
        left: $distance
        right: $distance
      .comments
        margin:
          bottom: 5px
        .date
          font-size: 11px
        .view-info
          font-weight: bold
          font-size: $font-size
          margin:
            top: 10px
            bottom: 5px
        .comment-count
          font-size: $font-size
          font-weight: bold
          color: gray
          margin:
            top: 3px
            bottom: 10px
      .border
        border-top: $border-line
        margin:
          left: -$distance
          right: -$distance
      .share-input
        height: 50px
        display: flex
        flex-direction: column
        justify-content: center


    
</style>
