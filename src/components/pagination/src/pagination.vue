<template>
  <div>
    <ul class="h-pagination" :class="{disabled:disabled}">
      <li :class="{'disabled-button':internalCurrentPage===1}"  @click="prev">
        <h-icon name="ios-arrow-left"></h-icon>
      </li>
      <li
        v-for="(page,index) in pagerList"
        :key="index"
        :class="{ active: page === internalCurrentPage }"
        @click="pageChange(page)"
      >
      
       <h-icon v-if="page === 'showMore'" name="h-icon-more"></h-icon>
       <template v-else>{{page}}</template>
      </li>
      <li :class="{'disabled-button':internalCurrentPage===pageCount}" @click="next">
        <h-icon name="ios-arrow-right"></h-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import HIcon from "../../icon";
export default {
  name: "h-pagination",
  components: {
    HIcon
  },
  props: {
    currentPage: {
      default: 1,
      type: Number
    }, // 当前页
    total: {
      default: 1,
      type: Number
    }, //总条数
    pageCount: {
      default: 20,
      type: Number
    }, // 数据总数
    pagerCount: {
      default: 5,
      type: Number
    }, // 页码按钮的数量 大于等于 5 且小于等于 18 的奇数
    pageSize: {
      default: 20,
      type: Number
    }, //分页码
    disabled: Boolean,
    size: {
      type: String //分页大小  //small
    }
  },
  created() {
    this.internalCurrentPage = this.currentPage;
    this.internalPageSize = this.pageSize;
  },
  data() {
    return {
      internalCurrentPage: 1, //加载默认页
      internalPageSize: 0
    };
  },
  computed: {
    //  页数数组
    pagerList() {
      const pageCount = this.pageCount;
      // const halfPagerCount = (pagerCount - 1) / 2;
      const array = [];
       for (let i = 1; i <= pageCount; i++) {
            array.push(i);
          }
      return array
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
    pageChange(page){
      this.internalCurrentPage = page
      this.$emit('onChange',page)
    },
    //  上一页
    prev() {
      if (this.disabled || this.internalCurrentPage === 1) return;
      this.internalCurrentPage--;
      // const newVal = this.internalCurrentPage - 1;
      this.emitChange();
    },
    //  下一页
    next() {
      if (this.disabled || this.internalCurrentPage === this.pageCount) return;
      this.internalCurrentPage++;
      // const newVal = this.internalCurrentPage + 1;
      this.emitChange();
    }
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
  .h-pagination {
    li{
      display: inline-block;
      border: 1px solid #D7D7DB;
      vertical-align: middle;
      padding: 0 10px;
      height: 28px;
      line-height: 28px;
      background-color: #fff;
      font-size: 13px;
      color: #8D8E99;
      cursor: pointer;
      .h-icon{
        font-size: 13px;
        color: #8D8E99;
      }
    }
    .disabled-button{
      cursor: not-allowed;
    }
    .active{
      background: #0c80f9;
      border: 1px solid #0c80f9;
      color: #ffffff;
    }
  }
</style>
