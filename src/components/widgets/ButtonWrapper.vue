<script setup lang="ts">
import type {PropType} from "vue";
import type {IButton} from "@/models/interfaces/IButton";

defineProps({
  primaryBtn: {
    type: Object as PropType<IButton>,
    required: true
  },
  secondaryBtn: {
    type: Object as PropType<IButton>,
    required: true
  }
})
</script>

<template>
  <div class="button-wrapper">
    <a :href="primaryBtn.href" :target="primaryBtn.target" class="primary-btn">{{ primaryBtn.title }}</a>
    <a :href="secondaryBtn.href" :target="secondaryBtn.target" class="secondary-btn">{{ secondaryBtn.title }}</a>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 530px) {
  .button-wrapper {
    max-width: 500px;
    flex-direction: row;
    grid-column-gap: 15px;
  }
}

@media only screen and (min-width: 768px) {
  .button-wrapper {
    max-width: 520px;
    flex-direction: row;
    grid-column-gap: 25px;
  }
}

@media only screen and (min-width: 991px) {
  .button-wrapper {
    max-width: 516px;
  }
}
</style>