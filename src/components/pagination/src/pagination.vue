<template>
   <ul class="h-pagination">
      <h-icon name="ios-arrow-left" @click="prev"></h-icon>
      <li 
         :class="{ active: currentPage === 1, disabled }">
         </li>
      <h-icon name="ios-arrow-right" @click="next"></h-icon>
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
    total: Number,  //总条数
    pagerCount: Number, // 数据总数
    disabled: Boolean,
    size:{ 
      type:String,  //分页大小  //small 
    },
  },
  data() {
    return {}
  },
  computed: {
    //  页数数组
      pagerList() {
        const pagerCount = this.pagerCount;
        const halfPagerCount = (pagerCount - 1) / 2;
      }
    },
    methods: {
      emitChange() {
      this.$nextTick(() => {
        // if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
        //   this.$emit('current-change', this.internalCurrentPage);
        //   this.lastEmittedPage = this.internalCurrentPage;
        //   this.userChangePageSize = false;
        // }
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