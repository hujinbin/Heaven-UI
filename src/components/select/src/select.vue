<template>
   <div class="h-select">
     <h-input
     :placeholder="placeholder"
      v-model="value"
      :name="name"
      :readonly="readonly"
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
     readonly() {
        return !this.filterable
     },
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
   .h-select{
     display: inline-block;
     position: relative;
     .h-select-dropdown{
       width: inherit;
       overflow: auto;
       margin: 5px 0;
       padding: 5px 0;
       background-color: #fff;
       box-sizing: border-box;
       border-radius: 4px;
       box-shadow: 0 1px 6px rgba(0,0,0,.2);
       position: absolute;
       z-index: 900;
     }
   }
</style>
