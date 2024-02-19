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
  <svg :fill="fill" :style="{ transform: `rotate(${getRotationAngle()}deg)` }" width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 2V21.5M5.5 21.5L2 18M5.5 21.5L9 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>