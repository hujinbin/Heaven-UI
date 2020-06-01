<template>
  <div class="h-form-item">
    <div class="h-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HFromItem",
  props: {
      label: String,
      labelWidth: String,
  },
  data(){
    return{}
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.h-form-item {
    margin-bottom: 22px;
}
</style>
