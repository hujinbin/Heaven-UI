<template>
   <div class="h-select">

   </div>
</template>

<script>
  import HInput from '../../input';
export default {
  name: "HSelect",
  props: {
    label: Number | String,
    value: Number | String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: "",
    size: {
      type: Number
    }
  },
  components: {
      HInput,
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>
