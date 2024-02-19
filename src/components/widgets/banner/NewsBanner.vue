<script setup lang="ts">
import CloseIcon from "@/components/icons/CloseIcon.vue";
import {useMainStore} from "@/stores/MainStore";

const mainStore = useMainStore()
</script>

<template>
  <div v-if="mainStore.showBanner" class="discount-banner">
    <p>Treffen Sie mich am <strong>01. & 02. Mai</strong> persönlich auf der Jüterboger Festwoche. Klicken Sie <span>HIER</span> für mehr Infos!</p>
    <CloseIcon @click="mainStore.showBanner = false" fill="var(--primary-background-color)" />
  </div>
</template>