<template>
  <div class="v-m-mini-footer">
    <VButton>
      <span>Hakkımızda</span>
    </VButton>
    <VButton>
      <span>Destek</span>
    </VButton>
    <VButton>
      <span>Basın</span>
    </VButton>
    <VButton>
      <span>API</span>
    </VButton>
    <VButton>
      <span>İş Fırsatları</span>
    </VButton>
    <VButton>
      <span>Gizlilik</span>
    </VButton>
    <VButton>
      <span>Koşullar</span>
    </VButton>
    <VButton>
      <span>Dizin</span>
    </VButton>
    <VButton>
      <span>Profiller</span>
    </VButton>
    <VButton>
      <span>Konu Etiketleri</span>
    </VButton>
    <VButton>
      <span>Dil</span>
    </VButton>
    <p>© 2019 INSTAGRAM</p>
  </div>
</template>

<script>

import VButton from '@/components/atoms/VButton'

export default {
  name: "VMiniFooter",
  components: {
    VButton
  }
}
</script>


<style lang="sass">
  .v-m-mini-footer
    line-height: 13px
    span, p
      font-size: 11px
      font-weight: 400
      color: $light-text-color
      &:after
        content: "\00B7"
        margin: 5px
    button:last-child
      span:after
        content: ""
</style>
