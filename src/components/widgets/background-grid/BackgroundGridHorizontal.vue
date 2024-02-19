<template>
  <div class="background-grid-horizontal">
    <div class="horizontal-line"></div>
    <div class="horizontal-line"></div>
    <div class="horizontal-line"></div>
    <div class="horizontal-line"></div>
  </div>
</template>

<style scoped>
.background-grid-horizontal {
  height: 100%;
  grid-row-gap: 150px;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  display: flex;
  position: absolute;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  max-height: 1px;
  background-image: linear-gradient(to right, #000000, rgba(255, 255, 255, .17) 10%, rgba(255, 255, 255, .17) 90%, #000000);
}
</style>