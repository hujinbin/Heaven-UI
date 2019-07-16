<template>
    <button class="h-button">
      <span v-if="icon" :class="icon"></span>
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'button',
  props:['icon'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>