<script setup></script>
<template>
  <h1>404</h1>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 3000)
})
</script>
