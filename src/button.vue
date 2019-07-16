<template>
    <button class="h-button">
      <span v-if="icon" :class="icon"></span>
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'button',
  props:{
    icon:String,
    size:{
      type:String,
      default:'normal'
    }	//尺寸	String	small, normal, large
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>