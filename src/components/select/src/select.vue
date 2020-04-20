<template>
   <div class="h-select">
     <h-input
     v-model="value"
      :name="name"
     ></h-input>
     <div class="h-select-dropdown">
       <slot></slot>
     </div>
   </div>
</template>

<script>
  import HInput from '../../input';
export default {
  name: "HSelect",
  props: {
    label: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: "",
    size: {
      type: Number
    }
  },
  components: {
      HInput,
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>
