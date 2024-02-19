<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: '#FFFFFF'
  }
})
</script>

<template>
  <svg :fill="fill" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49 0L50.0394 47.9606L98 49L50.0394 50.0394L49 98L47.9606 50.0394L0 49L47.9606 47.9606L49 0Z"
          fill="url(#paint0_radial_244_2460)"/>
    <defs>
      <radialGradient id="paint0_radial_244_2460" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(49 49) rotate(90) scale(49)">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
  </svg>
</template>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>