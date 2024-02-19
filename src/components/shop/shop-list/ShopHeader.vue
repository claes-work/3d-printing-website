<script setup lang="ts">
import BackgroundGridVertical from "@/components/widgets/background-grid/BackgroundGridVertical.vue";
import BackgroundGridHorizontal from "@/components/widgets/background-grid/BackgroundGridHorizontal.vue";
import ShopHeaderContent from "@/components/shop/shop-list/ShopHeaderContent.vue";
</script>

<template>
  <section id="shop-header-section">
    <div class="container">
      <ShopHeaderContent />
    </div>
    <BackgroundGridHorizontal />
    <BackgroundGridVertical />
  </section>
</template>

<style scoped>
#shop-header-section {
  background-color: black;
  border-radius: 0 0 65px 65px;
  overflow: hidden;
}
</style>