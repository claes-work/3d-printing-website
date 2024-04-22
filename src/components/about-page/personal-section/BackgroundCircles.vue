<script setup lang="ts">

</script>

<template>
  <div class="circle-1"></div>
  <div class="circle-2"></div>
  <div class="circle-3"></div>
</template>

<style scoped>
.circle-1,
.circle-2,
.circle-3 {
  position: absolute;
  bottom: 0;
  left: -5%;
  width: 110%;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.circle-1 {
  transform: translateY(10%);
  background-color: #335DEC;
  z-index: 10;
}

.circle-2 {
  transform: translateY(30%);
  background-color: #3661F1;
  z-index: 15;
}

.circle-3 {
  transform: translateY(50%);
  background-color: #406CFF;
  z-index: 20;
}

@media only screen and (min-width: 991px) {
  .circle-1,
  .circle-2,
  .circle-3 {
    bottom: -5%;
    left: unset;
    right: 0;
    height: 110%;
    width: unset;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .circle-1 {
    transform: translateX(10%);
  }

  .circle-2 {
    transform: translateX(30%);
  }

  .circle-3 {
    transform: translateX(50%);
  }
}

@media only screen and (min-width: 1280px) {
  .circle-1,
  .circle-2,
  .circle-3 {
    bottom: -20%;
    height: 140%;
  }

  .circle-1 {
    transform: translateX(0);
  }

  .circle-2 {
    transform: translateX(20%);
  }

  .circle-3 {
    transform: translateX(40%);
  }
}

</style>