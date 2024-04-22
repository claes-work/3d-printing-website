<script setup lang="ts">
import HeroStar from "@/components/icons/HeroStar.vue";
</script>

<template>
  <div class="background-grid-vertical">
    <div class="vertical-line"></div>
    <div class="vertical-line">
      <div class="hero-star left">
        <HeroStar />
      </div>
    </div>
    <div class="vertical-line">
      <div class="hero-star left top">
        <HeroStar />
      </div>
    </div>
    <div class="vertical-line"></div>
    <div class="vertical-line"></div>
    <div class="vertical-line"></div>
    <div class="vertical-line">
      <div class="hero-star right">
        <HeroStar />
      </div>
    </div>
    <div class="vertical-line">
      <div class="hero-star right">
        <HeroStar />
      </div>
    </div>
    <div class="vertical-line"></div>
  </div>
</template>

<style scoped>
.background-grid-vertical {
  grid-column-gap: 150px;
  flex-flow: wrap;
  flex: 0 auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.vertical-line {
  width: 1px;
  height: 100vh;
  background-image: linear-gradient(to bottom, #000000, rgba(255, 255, 255, .17) 10%, rgba(255, 255, 255, .17) 58%, #000000 79%);
  position: relative;
}

.hero-star {
  position: relative;
  width: 98px;
  height: 98px;
}

.hero-star.left {
  top: 314px;
  left: -48px;
}

.hero-star.left.top {
  top: 11px;
  left: -48px;
}

.hero-star.right {
  top: 465px;
  left: -48px;
}

.hero-star svg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>