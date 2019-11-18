<template>
   <ul class="h-pagination">
      <h-icon name="ios-arrow-left"></h-icon>
      <li 
         :class="{ active: currentPage === 1, disabled }">
         </li>
      <h-icon name="ios-arrow-right"></h-icon>
   </ul>
</template>

<script>
import HIcon from '../../icon'
export default {
 name: 'h-pagination',
 components:{
    HIcon
  },
  props:{
    currentPage: Number,

    pageCount: Number,

    pagerCount: Number,

    disabled: Boolean,
    size:{ 
      type:Number,  //分页大小
    },
  },
  data() {
    return {}
  },
    methods: {
      emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('current-change', this.internalCurrentPage);
          this.lastEmittedPage = this.internalCurrentPage;
          this.userChangePageSize = false;
        }
      });
    },
   //  上一页
     prev() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage - 1;
      this.emitChange();
    },
   //  下一页
    next() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage + 1;
      this.emitChange();
    },
    }
}
</script>

<style lang="scss" scoped>
</style>