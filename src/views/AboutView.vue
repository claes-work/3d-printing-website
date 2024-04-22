<script setup>
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";
import BaseHeader from "@/components/widgets/BaseHeader.vue";
import AboutHeaderContent from "@/components/about-page/AboutHeaderContent.vue";
import TwoColumnSection from "@/components/widgets/TwoColumnSection.vue";
import BlueSection from "@/components/widgets/BlueSection.vue";
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
      <h2>Take a look at the results we had achieved</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi et orci sit leo ut id enim risus amet leo in aut non egestas phasellus vitae pulvinar sit netus justo mauris socis interdum cras amet lorem at accumsan malesuada diam elementum venenatis tristique mauris sit amet enim purus sed.

        Lorem ipsum dolor sit amet consectetur adipiscing elit libero eu laoreet felis sit. Platea faucibus neque at elit amet maecenas quis pretium</p>
    </template>
    <template #right-column>
      <div class="img-wrapper">
        <img class="me" src="@/assets/images/Sebastian_Claes_Hero_Image.png" alt="Sebastian Claes Hero Image" />
      </div>
    </template>
  </TwoColumnSection>
  <BlueSection>

  </BlueSection>
  <FooterSection />
  <CopyrightSection />
</template>

<style scoped>
h2 {
  text-align: left;
}

.img-wrapper {
  display: flex;
  justify-content: center;
}

.me {
  width: 100%;
  max-width: 370px;
  margin-bottom: -80px;
}

@media only screen and (min-width: 768px) {
  .me {
    margin-bottom: -120px;
  }
}

@media only screen and (min-width: 991px) {
  .me {
    margin-bottom: -100px;
  }
}

@media only screen and (min-width: 1280px) {
  .me {
    max-width: 420px;
    margin-bottom: -120px;
  }
}
</style>