<template>
  <div class="v-o-post">
    <div class="header">
      <VUserLine photo="https://fakeimg.pl/200x200/?text=Photo&font=lobster" name="Tony Stark"/>
    </div>
    <div class="body">
      <!-- <VImage url="https://fakeimg.pl/200x200/?text=Photo&font=lobster"/> -->

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
        <p class="view-info">60.808 görüntüleme</p>
        <p class="comment-container">
          <span class="user">grafikri</span>
          <span class="comment">Güzel bir yorum yapalım</span>
        </p>
        <span class="date">2 saat önce</span>
      </div>
      <div class="share-input">share input</div>
    </div>
  </div>
</template>


<script>

import VIcon from '@/components/atoms/VIcon'
import VImage from '@/components/atoms/VImage'
import VUserLine from '@/components/molecules/VUserLine'

export default {
  name: "VPost",
  components: {
    VUserLine,
    VImage,
    VIcon
  }
}
</script>


<style lang="sass" scoped>

  $distance: 10px
  $comment-font-size: 14px

  .v-o-post
    @extend %box-style
    margin: auto
    max-width: 600px
    .header
      padding: $distance
    .body
      padding:
        left: $distance
        right: $distance
      .tools
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
          font-size: $comment-font-size
      .comment-container
        .user
          font-weight: bold
          font-size: $comment-font-size
          padding:
            right: 5px
        .comment
          font-size: $comment-font-size


    
</style>
