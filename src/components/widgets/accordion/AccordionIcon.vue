<script setup lang="ts">

</script>

<template>
  <div class="accordion-icon-wrapper">
    <div class="accordion-icon-line"></div>
    <div class="accordion-icon-line x"></div>
  </div>
</template>

<style>
.accordion-icon-wrapper {
  width: 34px;
  height: 34px;
  min-height: 34px;
  min-width: 34px;
  background-color: #90cd11;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.accordion-icon-line {
  width: 16px;
  height: 2px;
  background-color: #070910;
  border-radius: 50px;
  position: absolute;
  transition: .3s;
  overflow: hidden;
}

.accordion-icon-line.x {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg);
  transform-style: preserve-3d;
}
</style>