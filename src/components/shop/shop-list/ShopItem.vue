<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="item-wrapper">
    <img class="item-image" :src="$image(item.src)" :alt="item.title" />
    <div class="item-content">
      <h4>{{ item.title }}</h4>
      <span>{{ item.price }} €</span>
    </div>
  </div>
</template>

<style scoped>
.item-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: lightgrey;
  border-radius: 25px;
  object-fit: cover;
}

.item-content {
  width: 100%;
}

h4 {
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 0;
  color: var(--primary-text-color-dark);
}

.item-content span {
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 600;
}

@media only screen and (min-width: 1280px) {
  .item {
    border-radius: 35px;
  }
}
</style>