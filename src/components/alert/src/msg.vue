<template>
    <transition name="fade">
        <div class="shade">
            <div class="h-alert-msg">
                <slot></slot>
            </div>
        </div>
  </transition>
</template>

<script>
export default {
  name: 'HAlertMsg',
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
   .h-alert{
     display: inline-block;
     background: rgba(0,0,0,0.5);
     color: #ffffff;
   }
</style>