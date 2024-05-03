<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BaseHeader from "@/components/widgets/BaseHeader.vue";
</script>

<template>
  <BannerWrapper v-show="false" />
  <NavigationBar />
  <BaseHeader>
    <template #content>

    </template>
  </BaseHeader>
  <FooterSection />
  <CopyrightSection />
</template>

<style>
</style>