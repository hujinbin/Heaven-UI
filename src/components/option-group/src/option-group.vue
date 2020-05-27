<template>
   <div>
     <solt>  
     </solt>
   </div>
</template>

<script>
export default {
  name: "HOptionGroup",
  props: {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .h-option{
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5E5E66;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      color: #ffffff;
      background: #0c80f9;
    }
  }
</style>
