<script setup lang="ts">
import BackgroundGridHorizontal from "@/components/widgets/background-grid/BackgroundGridHorizontal.vue";
import BackgroundGridVerticalShop from "@/components/widgets/background-grid/BackgroundGridVerticalShop.vue";
import type {ComputedRef, PropType} from "vue";
import type {IShopItem} from "@/models/interfaces/IShopItem";
import {computed} from "vue";

const props = defineProps({
  product: {
    type: Object as PropType<IShopItem>,
    required: true
  }
})

const showShortDescription: ComputedRef<boolean> = computed(
    () => props.product.shortDescription !== ''
)
</script>

<template>
  <section id="shop-detail-header-section">
    <div class="container">
      <h1>{{ product.title }}</h1>
      <p v-if="showShortDescription">{{ product.shortDescription }}</p>
    </div>
    <BackgroundGridHorizontal />
    <BackgroundGridVerticalShop />
  </section>
</template>

<style scoped>
#shop-detail-header-section {
  background-color: black;
  border-radius: 0 0 65px 65px;
  padding: 50px 20px 30px;
  overflow: hidden;
}

p {
  color: #dadae9;
  text-align: center;
}
</style>