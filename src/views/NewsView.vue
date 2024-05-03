<script setup lang="ts">
import NewsBanner from "@/components/widgets/banner/NewsBanner.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
</script>

<template>
  <NewsBanner v-show="false" />
  <NavigationBar/>
  <FooterSection />
  <CopyrightSection/>
</template>

<style scoped>

</style>