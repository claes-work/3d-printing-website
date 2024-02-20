<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BaseHeader from "@/components/widgets/BaseHeader.vue";
import AboutHeaderContent from "@/components/about-page/AboutHeaderContent.vue";
import TwoColumnSection from "@/components/widgets/TwoColumnSection.vue";
</script>

<template>
  <BannerWrapper v-show="true" />
  <NavigationBar />
  <BaseHeader>
    <template #content>
      <AboutHeaderContent  />
    </template>
  </BaseHeader>
  <TwoColumnSection>
    <template #left-column>
      <h2>Das bin ich</h2>
    </template>
    <template #right-column>
      <h2>Das bin ich</h2>
    </template>
  </TwoColumnSection>
  <FooterSection />
  <CopyrightSection />
</template>

<style>
</style>