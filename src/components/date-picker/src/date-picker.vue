<template>
   <div class="h-date-picker">
      <h-input></h-input>
      <div class="h-date" v-show="visible">
     </div>
   </div>
</template>

<script>
import HInput from '../../input'
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
     rows() {
        const date = new Date(this.year, this.month, 1);
        return date;
      }
  },
  watch: {
    type(type) {
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>
