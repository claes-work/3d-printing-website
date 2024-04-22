<script setup lang="ts">
import ButtonArrow from "@/components/icons/ButtonArrowIcon.vue";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  linkRoute: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <slot name="icon"></slot>
    <a>
      {{ linkText }}
      <ButtonArrow :direction="IconDirectionEnum.RIGHT" />
    </a>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  min-height: 480px;
  padding: 48px 24px;
  background-image: linear-gradient(to bottom, #EFF2F6 45%, rgba(255, 255, 255, 0));
  border-radius: 16px;
  cursor: pointer;
}

.card:hover {
  background-image: linear-gradient(to bottom, var(--main-color) 45%, var(--main-color));
}

.card p {
  font-size: 16px;
}

a {
  position: absolute;
  bottom: 48px;
  left: 24px;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-color);
}

a svg {
  stroke-width: 2px;
}

a svg {
  width: 15px;
  height: 12px;
  stroke: var(--main-color);
  margin-left: 5px;
}

.card:hover h3,
.card:hover p,
.card:hover a,
.card:hover svg {
  color: var(--primary-text-color-light);
  stroke: var(--primary-text-color-light);
}

@media only screen and (min-width: 768px) {
  #service-section {
    padding: 80px 20px;
  }

  .card {
    min-height: 460px;
    width: calc(50% - 12px);
  }
}

@media only screen and (min-width: 1280px) {
  #service-section {
    padding: 80px 20px;
  }

  .card {
    min-height: 490px;
    width: calc(50% - 12px);
  }
}
</style>