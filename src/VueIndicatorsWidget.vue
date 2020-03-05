<template>
  <div class="widget">
    <div class="widget-header"></div>
    <div class="widget-body"></div>
    <div class="widget-footer"></div>
  </div>
</template>
<script>
export default {
  name: "indicators-widget",
  props: {
    /**
     * Enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data() {}
};
</script>
<style scoped>
</style>>
