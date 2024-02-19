<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="property">
    <div class="value">{{ value }}</div>
    <p class="label">{{ label }}</p>
  </div>
</template>

<style scoped>
.property {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

p {
  margin-bottom: 0;
}

.value {
  width: 75px;
  font-size: 34px;
  font-weight: 900;
  color: #b3ff10;
}

.label {
  font-size: 28px;
  font-weight: 600;
  color: var(--primary-text-color-light);
}

@media only screen and (min-width: 768px) {
  .property {
    margin-bottom: 0;
    column-gap: 8px;
  }

  .value {
    width: unset;
    font-size: 32px;
  }

  .label {
    font-size: 32px;
  }
}
</style>