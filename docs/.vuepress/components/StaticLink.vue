<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StaticLink extends Vue {
  render(h: Vue.CreateElement) {
    return h("a", { domProps: this.$props }, this.$slots.default);
  }
}
</script>
