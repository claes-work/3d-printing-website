<script setup lang="ts">
import type {Ref} from "vue";
import {ref} from "vue";
import AccordionIcon from "@/components/widgets/accordion/AccordionIcon.vue";

const props = defineProps({
  number: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
})

const isActive: Ref<boolean> = ref(false)
</script>

<template>
  <div
      class="accordion-item-wrapper"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
  >
    <div class="accordion-item-header">
      <h3><span>{{ number }}</span> {{ title }}</h3>
       <AccordionIcon />
    </div>
    <div class="accordion-item-content">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style>
.accordion-item-wrapper {
  padding: 40px 15px 10px;
  cursor: pointer;
  border-radius: 12px;
  margin-bottom: 30px;
  border-top: 1px solid #24262C;
  transition: .3s;
}

.accordion-item-wrapper.active {
  background-color: #24262C;
}

.accordion-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
}

.accordion-item-header h3 {
  color: var(--primary-text-color-light);
  margin: 0;
  line-height: 130%;
  display: flex;
  column-gap: 5px;
}

.accordion-item-wrapper.active .accordion-icon-line.x {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0.3deg) skew(0deg);
  transform-style: preserve-3d;
}

.accordion-item-content {
  overflow: hidden;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
  width: 100%;
  height: 0;
  transition: .3s;
}

.accordion-item-wrapper.active .accordion-item-content {
  height: unset;
}

.accordion-item-content p {
  color: rgba(255, 255, 255, .6);
  margin: 12px 0 30px;
  line-height: 170%;
  letter-spacing: -.04rem;
  font-size: 16px;
}

@media only screen and (min-width: 768px) {
  .accordion-item-wrapper {
    padding: 40px 40px 10px;
  }

  .accordion-item-header h3 {
    column-gap: 18px;
  }

  .accordion-item-content {
    padding-left: 35px;
  }
}
</style>