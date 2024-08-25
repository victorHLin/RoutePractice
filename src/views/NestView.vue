<script setup></script>
<template>
  <div class="view">
    <div>Nested route</div>
    <p>Will be shown in all subpage</p>
    <RouterView />
  </div>
</template>

<style>
.nest-view {
  padding: 10px;
  border: 1px solid blue;
}
</style>
