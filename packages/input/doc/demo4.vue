<!-- html -->
<template>
  <yq-input leftIcon="m-icon-calendar" v-model="value1"></yq-input>
  <yq-input v-model="value2" rightIcon="m-icon-calendar"></yq-input>
  <yq-input v-model="value3" type="password" showPassword></yq-input>
</template>

<!-- js -->
<script setup>
import {ref} from "vue";

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
