declare module "*.vue" {
  import Vue from "vue";

  module "vue/types/vue" {
    interface Vue {
      $env: object;
    }
  }

  export default Vue;
}
