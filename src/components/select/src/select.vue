<template>
   <div class="h-select" ref="hSelect">
     <div v-if="multiple" class="h-select-tags">
         <h-tag
          type="info">
        </h-tag>
     </div>
     <h-input
     :placeholder="placeholder"
      v-model="query"
      :name="name"
      @focus="visible = true"
      :readonly="readonly"
     ></h-input>
     <div class="h-select-dropdown" v-show="visible">
       <slot></slot>
     </div>
   </div>
</template>

<script>
  import HInput from '../../input';
    import HTag from '../../tag';
export default {
  name: "HSelect",
  componentName: 'HSelect',
   provide() {
      return {
        'select': this
      };
    },
  props: {
    label: String,
    value: String,
    disabled: { // 是否可用
      type: Boolean,
      default: false
    },
    selectedLabel:'', // 选中的值
    name: "",
    size: {
      type: Number
    },
    filterable:{ // 是否可搜索
      type: Boolean,
      default: false,
    },
    multiple: Boolean, // 是否多选
    placeholder:String,
  },
  created(){
    this.$on('onSelect',this.onSelect)
  },
  mounted(){
    window.addEventListener('click',this.hideDropdown)
  },
  beforeDestroy(){
     window.removeEventListener('click',this.hideDropdown)
  },
  data(){
    return {
      visible: false,  //下拉框显示状态
      selected: this.multiple ? [] : {}, // 选中的值
      query:'', // 显示的值
    }
  },
  components: {
      HInput,
      HTag,
  },
  computed: {
     readonly() {
        return !this.filterable
     },
  },
  methods: {
    // 选中值改变
    emitChange(val) {
      this.$emit('change', val);
     },
    //  下拉框选中事件
     onSelect(option){
       console.log('选中的值')
      console.log(option)
      this.selected = option
      if(!this.multiple){
        this.query=option.label;
        this.visible = false;
      }
     },
    //  隐藏下拉框
     hideDropdown(e){
      //  this.refs.hSelect
      console.log(e.target)
        if(!this.$refs.hSelect.contains(e.target)){
          this.visible = false;
        }
     },
  }
};
</script>

<style lang="scss" scoped>
   .h-select{
     display: inline-block;
     position: relative;
     .h-select-dropdown{
       width: inherit;
       overflow: auto;
       margin: 5px 0;
       padding: 5px 0;
       background-color: #fff;
       box-sizing: border-box;
       border-radius: 4px;
       box-shadow: 0 1px 6px rgba(0,0,0,.2);
       position: absolute;
       z-index: 900;
       left: 0;
       right: 0;
     }
   }
</style>
