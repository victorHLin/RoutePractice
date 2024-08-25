<template>
  <div class="view">
    <div>Dynamic (id: {{ id }})</div>
    {{ person }}
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
const route = useRoute()
console.log(route)

// const id = route.params.id
const { id } = route.params

//const id = ref(route.params.id)

const person = ref({})

onMounted(async () => {
  const data = await axios.get(`https://randomuser.me/api/?seed=${`id`}`)
  console.log(data)

  person.value = data.data.results[0]
})
</script>
