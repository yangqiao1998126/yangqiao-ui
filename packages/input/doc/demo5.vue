<!-- html -->
<template>
    <yq-input leftIcon="m-icon-calendar" v-model="value1"  placeholder="默认大小"></yq-input>
    <yq-input leftIcon="m-icon-calendar" v-model="value2"  placeholder="小的" size="small"></yq-input>
    <yq-input leftIcon="m-icon-calendar" v-model="value3"  placeholder="更小的" size="mini"></yq-input>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>
