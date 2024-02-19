<script setup lang="ts">
import type {PropType} from "vue";
import type {IconDirectionEnum as IconDirectionType} from "@/models/enums/IconDirectionEnum";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";

const props = defineProps({
  fill: {
    type: String,
    default: '#FFFFFF'
  },
  direction: {
    type: Object as PropType<IconDirectionType>,
    required: true
  }
})

/**
 * Return the angle the icon should be rotated by based on the direction prop
 *
 * e.g. <ArrowIcon :direction="IconDirectionEnum.DOWN" /> arrow will face down
 *
 * NOTE: The angle may differ based on the original orientation of the svg
 *
 * @return number
 */
function getRotationAngle(): number {
  switch (props.direction) {
    default:
    case IconDirectionEnum.UP:
      return -90;
    case IconDirectionEnum.DOWN:
      return 90;
    case IconDirectionEnum.LEFT:
      return 180;
    case IconDirectionEnum.RIGHT:
      return 0;
  }
}
</script>

<template>
  <svg :fill="fill" :style="{ transform: `rotate(${getRotationAngle()}deg)` }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path
        d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
  </svg>
</template>

<style scoped>
svg {
  width: 7px;
  fill: var(--green-yellow);
}
</style>