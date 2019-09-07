<template>
    <transition name="fade">
        <div class="h-shade">
          <div class="h-alert-msg">
            {{text}}
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
    return {
    }
  },
  mounted(){
    console.log(this.text)
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
   .h-alert-msg{
     position: fixed;
     display: inline-block;
     min-width: 100px;
     background: rgba(0,0,0,0.5);
     color: #ffffff;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     padding: 4px 10px;
     text-align: center;
     border-radius: 4px;
   }
}
</style>