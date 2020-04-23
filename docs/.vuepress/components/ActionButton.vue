<template lang="pug">
  RouterLink(
    class="action-button",
    :to="link"
  )
    slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ActionButton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly link!: string;

  get vuepressThemeConfig() {
    return this.$themeConfig;
  }
}
</script>

<style lang="stylus">
.action-button
  display: inline-block
  box-sizing: border-box
  padding: 0.8rem 1.6rem
  border-bottom: 1px solid darken($accentColor, 10%)
  border-radius: 4px
  background-color: $accentColor
  color: #fff
  font-size: 1.2rem
  transition: background-color 0.1s ease

  &:hover
    background-color: lighten($accentColor, 10%)
</style>
