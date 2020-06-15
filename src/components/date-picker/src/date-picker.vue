<template>
   <div class="h-date-picker">
      <h-input></h-input>
      <div class="h-date">
     </div>
   </div>
</template>

<script>
import HInput from '../../input'
export default {
  name: 'HDatePicker',
  props:{
    type: {
      type: String,
      default: 'date'
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>
