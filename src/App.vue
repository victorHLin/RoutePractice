<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const text = ref('1234')
const router = useRouter()

const goPage = () => {
  router.push(`/nest/${text.value}`)
}
</script>

<template>
  <header>
    <input type="text" v-model="text" />
    <button @click="goPage">goPage</button>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/sample">Sample</RouterLink> |
        <RouterLink to="/sample2">Sample2</RouterLink>| <RouterLink to="/nest">Nest</RouterLink>|
        <RouterLink to="/nest/child">Nest child</RouterLink>|
        <RouterLink :to="`/nest/${text}`">Dynamic route</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.view {
  padding: 20px;
  border: 1px solid red;
}
</style>
