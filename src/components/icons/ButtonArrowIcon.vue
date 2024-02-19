<script setup lang="ts">
import type {PropType} from "vue";
import type {IconDirectionEnum as IconDirectionType} from "@/models/enums/IconDirectionEnum";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";

const props = defineProps({
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
  <svg :style="{ transform: `rotate(${getRotationAngle()}deg)` }" width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4.5H10.5M10.5 4.5L7 1M10.5 4.5L7 8" stroke-linecap="round"/>
  </svg>
</template>