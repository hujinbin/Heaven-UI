<template>
    <transition name="fade">
     <div class="h-alert">
       <div class="pop">{{text}}</div>
     </div>
  </transition>
</template>

<script>
export default {
  name: 'HAlert',
  props:{
    text:{
      type:String
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>