<template>
  <div class="h-rate">
    <span class="h-rate-item" v-for="(item, key) in max" :key="key" @click="setCurValue(item)">
      <h-icon class="h-rate-icon"
      :name="curValue >= item ? 'star-on': 'star-off'"
      :style="getIconStyle(item)">
      </h-icon>
       <h-icon class="h-rate-decimal"
       name="star-on"
        :style="decimalStyle"
      v-if="showDecimalIcon(item)"
      >
      </h-icon>
    </span>
  </div>
</template>

<script>
import HIcon from "../../icon";
export default {
  name: "HRate",
  components: {
    HIcon
  },
  props: {
    value: {
      type: String | Number //绑定值
    },
    disabled: {
      type: Boolean,
      default: false
    },
     colors: {
        type: [Array, Object],
        default() {
          return ['#ffe000', '#ffe000', '#ffe000'];
        }
      }, // 颜色
    max: {
      type: Number,
      default: 5
    },
    allowHalf: {  // 允许半星
        type: Boolean,
        default: false
    },
  },
  data(){
    return {
      curValue: this.value,
    }
  },
  computed: {
    // 按钮显示的颜色
     decimalStyle() {
        let width = '';
        if (this.allowHalf) {
          width = '50%';
        }
        return {
          color: this.activeColor,
          width
        };
      },
      // 当前颜色
      activeColor() {
        return this.colors[0];
      },

  },
  methods: {
    // 获取颜色
    getIconStyle(item) {
      if(this.curValue >= item){
          return {color : this.colors[0] }
      }
    },
    // 半星显示位置
     showDecimalIcon(item) {
        let showWhenDisabled = this.rateDisabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value;
        /* istanbul ignore next */
        let showWhenAllowHalf = this.allowHalf &&
          this.pointerAtLeftHalf &&
          item - 0.5 <= this.currentValue &&
          item > this.currentValue;
        return showWhenDisabled || showWhenAllowHalf;
      },
    // 选择值
    setCurValue(item){
      if(!this.disabled){
        this.curValue = item
        this.$emit('change',this.curValue)
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.h-rate {
  .h-rate-item {
    cursor: pointer;
    position: relative;
    .h-rate-decimal{
      position: absolute;
    }
  }
}
</style>
