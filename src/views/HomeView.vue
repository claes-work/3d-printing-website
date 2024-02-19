<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import HeroSection from "@/components/landing-page/hero-section/HeroSection.vue";
import ServiceSection from "@/components/landing-page/ServiceSection/ServiceSection.vue";
import PrinterPropertiesSection from "@/components/landing-page/printer-properties-section/PrinterPropertiesSection.vue";
import GallerySection from "@/components/landing-page/gallery-section/GallerySection.vue";
import FAQSection from "@/components/landing-page/faq-section/FAQSection.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
</script>

<template>
  <BannerWrapper v-show="true" />
  <NavigationBar />
  <HeroSection />
  <ServiceSection />
  <PrinterPropertiesSection />
  <GallerySection />
  <FAQSection />
  <FooterSection />
  <CopyrightSection />
</template>

<style>
</style>