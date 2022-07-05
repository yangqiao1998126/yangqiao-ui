<template>
  <headerBlockVue/>
  <router-view></router-view>
</template>
<script setup>
import headerBlockVue from "./components/header-block.vue";

</script>
<style scoped lang="scss">
#app{
  overflow: hidden;
}
//span{
//  margin:0 10px 10px 0;
//  display:inline-block
//}
//div{
//  margin-bottom:10px;
//}
</style>
