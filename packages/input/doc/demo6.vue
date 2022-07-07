<!-- html -->
<template>
  <yq-input v-model="value1" clearable>
    <template #btn>
      <yq-button type="primary" leftIcon="m-icon-search">搜索</yq-button>
    </template>
  </yq-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'

  const value1 = ref('')
</script>
