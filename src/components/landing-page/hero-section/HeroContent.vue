<script setup>
import ButtonWrapper from "@/components/landing-page/hero-section/ButtonWrapper.vue";
import ScrollArrowIcon from "@/components/icons/ScrollArrowIcon.vue";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum.ts";
import {useScroll} from "@/composables/UseScroll";

const { scrollToSection } = useScroll()
</script>

<template>
  <div class="hero-content">
    <h1 v-if="false">Private 3D-Druck- & Modellierungsdienste</h1>
    <h1>Ihr 3D-Druck Experte in<br>Jüterbog</h1>
    <p class="subtitle">Willkommen! Mein Name ist Sebastian und ich bin Ihr Ansprechpartner für maßgeschneiderte 3D-Drucke. Gerne möchte ich Ihnen helfen Ihre Projekte zu verwirklichen, mit Liebe zum Detail und technischer Expertise.</p>
    <ButtonWrapper />
    <a @click="scrollToSection('service-section')" class="scroll-wrapper">
      <ScrollArrowIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
    </a>
  </div>
</template>

<style scoped>
.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 25;
}

p {
  max-width: 600px;
  color: #dadae9;
  text-align: center;
  margin-bottom: 35px;
}

.scroll-wrapper {
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border: 1px solid rgba(255, 255, 255, .37);
  border-radius: 60px;
  margin-top: 40px;
  cursor: pointer;
}

.scroll-wrapper svg {
  animation: jump 3s ease-in-out infinite;
}

@media only screen and (min-width: 1280px) {
  p {
    margin-bottom: 46px;
  }


}

@keyframes jump {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-3px);
  }
}
</style>
