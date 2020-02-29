<template lang="pug">
  .demo-and-code
    .demo-wrapper
      .demo(v-html="htmlContent")
    .code-wrapper(:style="codeWrapperStyle")
      div(
        ref="code-wrapper",
        class="language-html extra-class")
        pre.language-html
          code(v-html="highlightedCode")
    .expand-wrapper
      button(
        :class="['expand', { 'is-expanded': isShowCode } ]",
        @click="isShowCode = !isShowCode"
      )
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from "vue-property-decorator";
import * as Prism from "prismjs";

@Component
export default class DemoAndCode extends Vue {
  @Prop({
    type: String,
    required: true
  })
  adxSlot!: string;

  @Prop({
    type: String,
    default() {
      const randomId = Math.random()
        .toString(36)
        .substring(2, 7);
      return `ad-${randomId}`;
    }
  })
  id!: string;

  @Ref("code-wrapper")
  codeWrapper!: HTMLDivElement;

  isShowCode: boolean = false;

  codeHeight: number = 999;

  scriptElement: HTMLScriptElement | null = null;

  renderAdElement: HTMLScriptElement | null = null;

  get highlightedCode(): string {
    const code = `<script src="${SDK_URL}" async><\/script>
${this.htmlContent}
<script>(adsbyopera = window.adsbyopera || []).push("${this.id}");<\/script>`;

    return Prism.highlight(code, Prism.languages["html"], "html");
  }

  get htmlContent(): string {
    return `<ins id="${this.id}" data-adx-slot="${this.adxSlot}" style="display: inline-block;width: 300px;"><\/ins>`;
  }

  get codeWrapperStyle(): object {
    return {
      maxHeight: this.isShowCode ? `${this.codeHeight}px` : "0"
    };
  }

  mounted(): void {
    const { height: codeHeight } = this.codeWrapper.getBoundingClientRect();
    this.codeHeight = codeHeight;

    if (typeof window.adsbyopera === "undefined") {
      const scriptElement = document.createElement("script");
      scriptElement.src = SDK_URL;
      scriptElement.async = true;

      document.body.appendChild(scriptElement);

      this.scriptElement = scriptElement;
    }

    (window.adsbyopera = window.adsbyopera || []).push(this.id);
  }
}
</script>

<style lang="stylus">
.demo-and-code
  margin-top: 10px
  border: 1px solid $borderColor
  border-radius: 4px
  transition: all 0.2s

  &:hover
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2)

  .demo-wrapper
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    padding: 5px 0

    .demo
      width: 300px

  .code-wrapper
    overflow: hidden
    transition: max-height 0.6s ease-in-out

    div[class*='language-']
      border-radius: 0

      pre
        margin: 0

  .expand-wrapper
    position: relative
    border-top: 1px solid $borderColor
    text-align: center

    &:hover .expand::before
      border-top-color: $accentColor
      border-bottom-color: $accentColor

    .expand
      position: relative
      margin: 0
      width: 100px
      height: 40px
      outline: none
      border-color: transparent
      background-color: transparent
      color: $accentColor
      font-size: 14px
      cursor: pointer
      transition: all 0.5s

      &.is-expanded::before
        border-top: none
        border-right: 6px solid transparent
        border-bottom: 6px solid $arrowBgColor
        border-left: 6px solid transparent

      &::before
        position: absolute
        top: 50%
        left: 50%
        width: 0
        height: 0
        border-top: 6px solid $arrowBgColor
        border-right: 6px solid transparent
        border-bottom: none
        border-left: 6px solid transparent
        content: ''
        transform: translate(-50%, -50%)
</style>
