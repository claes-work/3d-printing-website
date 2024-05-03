<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BaseHeader from "@/components/widgets/BaseHeader.vue";
import ImprintHeaderText from "@/components/imprint-page/ImprintHeaderText.vue";
import ImprintMaps from "@/components/imprint-page/ImprintMaps.vue";
import ContactSection from "@/components/about-page/ContactSection.vue";
</script>

<template>
  <div id="imprint">
    <BannerWrapper v-show="false"/>
    <NavigationBar/>
    <BaseHeader id="imprint-header">
      <template #content>
        <ImprintHeaderText/>
        <ImprintMaps/>
      </template>
    </BaseHeader>
    <ContactSection/>
    <FooterSection/>
    <CopyrightSection/>
  </div>
</template>

<style>

#imprint #contact-section {
  background-color: #FFFFFF;
}

#imprint #contact-section h2 {
  color: #333333;
}

#imprint #contact-section p {
  color: #3B3B3B;
}

@media only screen and (min-width: 991px) {
  #imprint-header .container {
    display: flex;
    align-items: center;
  }
}
</style>