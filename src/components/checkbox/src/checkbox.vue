<template>
   <label class="h-checkbox">
        <span class="h-checkbox-input">
           <span class="h-radio-inner"></span>
           <input type="checkbox" class="h-checkbox-original" :value="value" @change="$emit('change',$event.target.value)">
        </span>
       <span class="h-checkbox-label">
           <slot></slot>
       </span>
   </label>
</template>

<script>
export default {
 name: 'h-checkbox',
  props:{
    value: Number || String,
  },
}
</script>

<style lang="scss" scoped>
.h-radio{

}
</style>