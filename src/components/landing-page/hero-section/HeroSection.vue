<script setup>
import HeroContent from "@/components/landing-page/hero-section/HeroContent.vue";
import BackgroundElements from "@/components/landing-page/hero-section/BackgroundElements.vue";
import BackgroundGridHorizontal from "@/components/widgets/background-grid/BackgroundGridHorizontal.vue";
import BackgroundGridVertical from "@/components/widgets/background-grid/BackgroundGridVertical.vue";
</script>

<template>
  <section id="hero-section">
    <div class="container">
      <HeroContent />
      <BackgroundElements />
    </div>
    <BackgroundGridHorizontal />
    <BackgroundGridVertical />
  </section>
</template>

<style>
#hero-section {
  height: 82vh;
  min-height: 620px;
  max-height: 700px;
  padding: 35px 15px;
  background-color: black;
  overflow: hidden;
  border-radius: 0 0 65px 65px;
}
.container {
  z-index: 10;
}

@media only screen and (min-width: 530px) {
  #hero-section {
    min-height: 500px;
    max-height: 600px;
  }
}


@media only screen and (min-width: 768px) {
  #hero-section {
    padding-top: 60px;
    min-height: 680px;
    max-height: 740px;
  }
}

@media only screen and (min-width: 880px) {
  #hero-section {
    padding-top: 60px;
    min-height: 640px;
  }
}

@media only screen and (min-width: 991px) {
  #hero-section {
    min-height: 600px;
  }
}

@media only screen and (min-width: 1280px) {
  #hero-section {
    min-height: 700px;
    padding-top: 85px;
  }
}
</style>