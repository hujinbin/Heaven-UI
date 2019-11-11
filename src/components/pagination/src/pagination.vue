<template>
   <ul class="h-pagination">
      <li 
         :class="{ active: currentPage === 1, disabled }">
         </li>
      <li></li>
      <li></li>
      <li></li>
   </ul>
</template>

<script>
export default {
 name: 'h-pagination',
  props:{
    currentPage: Number,

    pageCount: Number,

    pagerCount: Number,

    disabled: Boolean,
    size:{ 
      type:Number,  //分页大小
    },
  },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
</style>