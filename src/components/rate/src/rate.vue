<template>
  <div class="h-rate">
    <span class="h-rate-item" v-for="(item, key) in max" :key="key" @click="curValue = item">
      <h-icon class="h-rate-decimal" name="star-on" v-if="curValue >= item"></h-icon>
      <h-icon class="h-rate-decimal" name="star-off" v-else></h-icon>
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
  methods: {}
};
</script>

<style lang="scss" scoped>
.h-rate {
  .h-rate-item {
    cursor: pointer;
  }
}
</style>
