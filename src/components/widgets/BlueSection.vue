<script setup lang="ts">

</script>

<template>
  <section class="blue-section">
    <slot name="content"></slot>
  </section>
</template>

<style scoped>
.blue-section {
  background-image: linear-gradient(130deg, var(--main-color), #244DD8);
  border-radius: 65px;
  z-index: 10;
}
</style>