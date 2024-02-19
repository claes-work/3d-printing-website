<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: '#FFFFFF'
  }
})
</script>

<template>
  <svg :fill="fill" width="325" height="244" viewBox="0 0 325 244" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49 146L50.0394 193.961L98 195L50.0394 196.039L49 244L47.9606 196.039L0 195L47.9606 193.961L49 146Z" fill="url(#paint0_radial_453_3218)"/>
    <path d="M300 66L300.53 90.4697L325 91L300.53 91.5303L300 116L299.47 91.5303L275 91L299.47 90.4697L300 66Z" fill="url(#paint1_radial_453_3218)"/>
    <path d="M135 0L136.103 50.8969L187 52L136.103 53.1031L135 104L133.897 53.1031L83 52L133.897 50.8969L135 0Z" fill="url(#paint2_radial_453_3218)"/>
    <defs>
      <radialGradient id="paint0_radial_453_3218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49 195) rotate(90) scale(49)">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="paint1_radial_453_3218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 91) rotate(90) scale(25)">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="paint2_radial_453_3218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135 52) rotate(90) scale(52)">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
  </svg>
</template>

<style scoped>
svg {
  width: auto;
}
</style>