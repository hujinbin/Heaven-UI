<template>
   <div class="h-date-picker">
     <span class="h-date-prefix">
       <HIcon
    name="time"
    ></HIcon>
     </span>
      <h-input
      @focus="handleFocus"
       @change="handleChange"></h-input>
      <div class="h-date" v-show="visible">
     </div>
   </div>
</template>

<script>
import HInput from '../../input'
import HIcon from '../../icon'
import { getFirstDayOfMonth } from 'untils/date-util'
export default {
  name: 'HDatePicker',
  props:{
    type: {
      type: String, // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
      default: 'date'
    },
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
      year() {
        return this.date.getFullYear();
      },
      month() {
        return this.date.getMonth();
      },
     rows() {
        const date = new Date(this.year, this.month, 1);
        let day = getFirstDayOfMonth(date); // 获取当前月的第一天
        return date;
      }
  },
  watch: {
    type(type) {
    }
  },
  methods: {
    handleFocus() {
      this.$emit('focus', this);
    },
    handleChange() {
    },
  },
}
</script>

<style lang="scss" scoped>
  .h-date-picker{
    position: relative;
    .h-date-prefix{
      position: absolute;
    }
  }
</style>
