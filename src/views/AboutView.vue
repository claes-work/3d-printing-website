<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BlueSection from "@/components/widgets/BlueSection.vue";
import MissionSection from "@/components/about-page/MissionSection.vue";
import PersonalSection from "@/components/about-page/personal-section/PersonalSection.vue";
import PortfolioSection from "@/components/about-page/PortfolioSection.vue";
import ContactSection from "@/components/about-page/ContactSection.vue";
</script>

<template>
  <BannerWrapper v-show="false" />
  <NavigationBar />
  <MissionSection />
  <BlueSection id="personal-section">
    <template #content>
      <PersonalSection />
    </template>
  </BlueSection>
  <PortfolioSection v-if="false" />
  <ContactSection />
  <FooterSection />
  <CopyrightSection />
</template>

<style scoped>
#personal-section {
  overflow: hidden;
  padding-bottom: 0;
}

/* TODO: temp since portfolio website is not available */
.blue-section {
  border-radius: 65px 65px 0 0;
  margin-bottom: -65px;
}

@media only screen and (min-width: 991px) {
  #personal-section {
    padding: 100px 20px;
  }
}

@media only screen and (min-width: 1280px) {
  #personal-section {
    padding: 120px 20px;
  }
}

</style>