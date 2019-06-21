<template>
  <div class="v-o-post">
    <div class="header">
      <VUserLine :photo="user.photo" :name="user.name" :size="36"/>
    </div>
    <div class="body">
      <VImage :url="post.photo"/>

      <div class="tools">
        <div class="left">
          <div>
            <VIcon class="fav"/>
          </div>
          <div>
            <VIcon class="comment"/>
          </div>
        </div>
        <div class="right">
          <VIcon class="bookmark"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="comments">
        <p class="view-info">{{ post.viewCount }} viewing</p>
        <VComment :name="user.name" :comment="user.comment"/>
        <p class="comment-count">View all {{ post.comments.count }} comments</p>
        <VComment :name="post.comments.last.name" :comment="post.comments.last.comment"/>
        <span class="date">{{ post.date }}</span>
      </div>
      <div class="share-input">share input</div>
    </div>
  </div>
</template>


<script>

import VIcon from '@/components/atoms/VIcon'
import VImage from '@/components/atoms/VImage'
import VComment from '@/components/molecules/VComment'
import VUserLine from '@/components/molecules/VUserLine'

export default {
  name: "VPost",
  components: {
    VUserLine,
    VComment,
    VImage,
    VIcon
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
            list: [{
              name: '',
              comment: ''
            }],
            count: 0,
            last: {
              name: '',
              comment: ''
            }
          }
        }
      }
    },
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
            bottom: 3px


    
</style>
