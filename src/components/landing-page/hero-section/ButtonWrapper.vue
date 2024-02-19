<script setup lang="ts">

</script>

<template>
  <div class="button-wrapper">
    <RouterLink :to="{ name: 'shop'}" class="primary-btn">Alle Produkte</RouterLink>
    <button class="secondary-btn">Modellierungsarbeit</button>
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