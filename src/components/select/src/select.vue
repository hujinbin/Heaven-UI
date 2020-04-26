<template>
   <div class="h-select">
     <h-input
     :placeholder="placeholder"
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
    disabled: { // 是否可用
      type: Boolean,
      default: false
    },
    name: "",
    size: {
      type: Number
    },
    filterable:{ // 是否可搜索
      type: Boolean,
      default: false,
    },
    placeholder:String,
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
