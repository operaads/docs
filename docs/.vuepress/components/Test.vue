<template lang="pug">
  div
    span
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  get vuepressThemeConfig() {
    return this.$themeConfig;
  }
}
</script>
