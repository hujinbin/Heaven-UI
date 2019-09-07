<template>
    <transition name="fade">
      <div class="h-shade" @click.self="close">
        <div class="h-alert">
          <div class="h-alert-header">
            提示
            <h-icon name="close" @click="close"></h-icon>
          </div>
          <div class="h-alert-body">{{text}}</div>
          <div class="h-alert-footer">
            <h-button type="primary" @click="close">确定</h-button>
          </div>
        </div>
      </div>
  </transition>
</template>

<script>
import HButton from '../../button'
import HIcon from '../../icon'
export default {
  name: 'HAlert',
  components:{
     HButton,
     HIcon,
  },
  props:{
    text:{
      type:String
    }
  },
  data() {
    return {}
  },
   mounted() {
     console.log(this)
     console.log(this.text)
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    },
  methods: {
    // esc关闭消息
    keydown(e){
       if (e.keyCode === 27) { 
        this.close()
       }
    },
    // 关闭弹窗
    close(){
      this.$el.parentNode.removeChild(this.$el);
    }
  },
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
      left: 50%;
      top: 50%;
      border-radius: 2px;
      transform: translate(-50%, -50%);
      padding: 15px;
      min-width: 200px;
      .h-alert-header{
        
      }
      .h-alert-body{
        padding: 20px 0;
      }
      .h-alert-footer{
        text-align: right;
      }
    }
   }
</style>