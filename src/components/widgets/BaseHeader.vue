<script setup lang="ts">
import BackgroundGridVertical from "@/components/widgets/background-grid/BackgroundGridVertical.vue";
import BackgroundGridHorizontal from "@/components/widgets/background-grid/BackgroundGridHorizontal.vue";
</script>

<template>
  <section class="base-header">
    <div class="container">
      <slot name="content"></slot>
    </div>
    <BackgroundGridHorizontal />
    <BackgroundGridVertical />
  </section>
</template>

<style scoped>
.base-header {
  background-color: black;
  border-radius: 0 0 65px 65px;
  overflow: hidden;
}
</style>