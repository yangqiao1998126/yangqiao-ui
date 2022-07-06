<template>
  <button @click="handleClick" :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span :style="{'margin-left':leftIcon?'4px':'','margin-right':rightIcon?'4px':''}"><slot/></span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script>
export default {
  name:"yq-button"
}
</script>
<script setup>
import {computed} from 'vue'
const emits = defineEmits(['click'])
const props = defineProps({
  type:{
    type:String,
    default:'default'
  },
  disabled:Boolean,
  round:Boolean,
  size:{
    type:String,
    default:'default'
  },
  customColor:{
    type:String,
    default:''
  },
  leftIcon:String,
  rightIcon:String,
  loading:Boolean
})
const handleClick = (e) =>{
  if(props.disabled) return
  emits('click')
}
const mBtnDeaultStyle = {
  background:props.customColor,
  border:props.customColor,
  color:'#fff'
}
const isClass = computed(()=>{
  return [
    props.size=='default'?'yq-button':props.size=='medium'?'yq-button-medium':props.size=='small'?'yq-button-small':props.size=='mini'?'yq-button-mini':'yq-button',
    props.type?props.disabled?'':`yq-button-${props.type}`:'',
    props.disabled?`yq-button-${props.type}-disabled`:'',
    {
      'yq-button-round':props.round
    }
  ]
})
const isIconClass = computed(()=>{
  return [
    'iconfont',
    props.leftIcon||props.rightIcon,
    props.loading?props.leftIcon=='m-icon-loading1'||props.leftIcon=='m-icon-loading2'||props.leftIcon=='m-icon-loading3'||props.leftIcon=='m-icon-loading4'||props.leftIcon=='m-icon-loading5'||props.leftIcon=='m-icon-loading6'||props.rightIcon=='m-icon-loading1'||props.rightIcon=='m-icon-loading2'||props.rightIcon=='m-icon-loading3'||props.rightIcon=='m-icon-loading4'||props.rightIcon=='m-icon-loading5'||props.rightIcon=='m-icon-loading6'?'m-icon-loading':'':''
  ]
})
const styles = computed(()=>{
  return [
    props.type == 'custom' ? (props.customColor==''?{}:mBtnDeaultStyle) :{}
  ]
})
</script>
<style>
@import url('../../styles/iconfont.css');
@import url('../../styles/main.css');
</style>
<style scoped lang="scss">

.yq-button{
  padding:10px 20px;
  outline:none;
  cursor: pointer;
  font-size:14px;
  border-radius:2px;
  background: #fff;
  transition:all .15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i{

  }
  span{
    display: inline-block;
  }

}
.yq-button-medium{
  padding:8px 18px;
  outline:none;
  cursor: pointer;
  font-size:14px;
  border-radius:2px;
  background: #fff;
  transition:all .15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i{
    font-size:14px;
  }
}
.yq-button-small{
  padding:7px 13px;
  outline:none;
  cursor: pointer;
  font-size:13px;
  border-radius:2px;
  background: #fff;
  transition:all .15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i{
    font-size:13px;
  }
}
.yq-button-mini{
  padding:7px 13px;
  outline:none;
  cursor: pointer;
  font-size:12px;
  border-radius:2px;
  background: #fff;
  transition:all .15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i{
    font-size:12px;
  }
}
.yq-button-round{
  border-radius:22px;
}
.yq-button-default{
  border:1px solid #d9d9d9;
  background: #fff;
  color:#333;
  &:hover{
    color:#0e80eb;
    border-color: #0e80eb;
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-custom{
  color:#333;
  &:hover{
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-primary{
  border:1px solid #0e80eb ;
  color:#fff;
  background-color:#0e80eb;
  &:hover{
    opacity: .8;
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-success{
  border:1px solid #09b63d ;
  color:#fff;
  background-color:#09b63d;
  &:hover{
    opacity: .8;
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-danger{
  border:1px solid #ec3437;
  background: #ec3437;
  color:#fff;
  &:hover{
    color:#fff;
    border-color: #ec3437;
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-warning{
  border:1px solid #f57b29;
  background: #f57b29;
  color:#fff;
  &:hover{
    color:#fff;
    border-color: #f57b29;
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-text{
  border:1px solid #fff;
  background: none;
  color:#0e80eb;
  padding:0 5px;
  &:hover{
    color:#0e80eb;
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}
.yq-button-dashed{
  border:1px dashed #d9d9d9;
  background: #fff;
  color:#333;
  &:hover{
    color:#0e80eb;
    border-color: #0e80eb;
    opacity:.8
  }
  &:active{
    opacity: 1;
  }
}

.yq-button-default-disabled{
  cursor: no-drop;
  border:1px solid #d9d9d9;
  background: #fff;
  opacity: .5;
  color: #333;
}
.yq-button-primary-disabled{
  cursor: no-drop;
  border:1px solid #0e80eb;
  background: #0e80eb;
  opacity: .5;
  color:#fff;
}
.yq-button-success-disabled{
  cursor: no-drop;
  border:1px solid #09b63d;
  background: #09b63d;
  opacity: .5;
  color:#fff;
}
.yq-button-danger-disabled{
  cursor: no-drop;
  border:1px solid #ec3437;
  background: #ec3437;
  opacity: .5;
  color:#fff;
}
.yq-button-warning-disabled{
  cursor: no-drop;
  border:1px solid #f57b29;
  background: #f57b29;
  opacity: .5;
  color:#fff;
}
.yq-button-dashed-disabled{
  cursor: no-drop;
  border:1px solid #d9d9d9;
  background: #fff;
  opacity: .5;
  color: #333;
}
.yq-button-text-disabled{
  cursor: no-drop;
  border:1px solid #fff;
  background: none;
  opacity:.5;
  color:#0e80eb;
}
.yq-button-custom-disabled{
  cursor: no-drop;
  opacity:.5;
}

.m-icon-loading{
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
</style>
