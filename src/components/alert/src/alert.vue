<template>
    <transition name="fade">
      <div class="h-shade">
        <div class="h-alert">
          <div class="h-alert-header"></div>
          <div class="pop">{{text}}</div>
        </div>
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
   .h-shade{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    .h-alert{
      background: #ffffff;
      position: fixed;
      width: 500px;
      height: 400px;
      padding: 10px 20px;
    }
   }
</style>