<template>
  <div class="h-rate">
    <span class="h-rate-item" v-for="(item, key) in max" :key="key" @click="curValue = item">
      <h-icon class="h-rate-icon"
      :name="curValue >= item ? 'star-on': 'star-off'"
      :style="getIconStyle(item)">
      </h-icon>
       <h-icon class="h-rate-decimal"
      name="star-on"
      style="display:none"
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
    }
  },
  data(){
    return {
      curValue: this.value,
    }
  },
  computed: {},
  methods: {
    getIconStyle(item) {
      if(this.curValue >= item){
          return {color : this.colors[0] }
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
  }
}
</style>
