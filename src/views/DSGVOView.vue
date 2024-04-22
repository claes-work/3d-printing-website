<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BaseHeader from "@/components/widgets/BaseHeader.vue";
import DSGVOText from "@/components/dsgvo/DSGVOText.vue";
</script>

<template>
  <BannerWrapper v-show="true" />
  <NavigationBar />
  <BaseHeader>
    <template #content>
      <h1>Datenschutz&shy;erkl&auml;rung</h1>
    </template>
  </BaseHeader>
  <DSGVOText />
  <FooterSection />
  <CopyrightSection />
</template>

<style>
</style>