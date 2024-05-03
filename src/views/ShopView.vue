<script setup lang="ts">
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import ShopHeader from "@/components/shop/shop-list/ShopHeader.vue";
import SideBar from "@/components/shop/shop-list/SideBar.vue";
import ShopItem from "@/components/shop/shop-list/ShopItem.vue";
import {useShopStore} from "@/stores/ShopStore";
import BannerWrapper from "@/components/widgets/banner/BannerWrapper.vue";

const shopStore = useShopStore()
</script>

<template>
  <BannerWrapper v-show="false" />
  <NavigationBar/>
  <ShopHeader />
  <section id="shop-content">
    <SideBar />
    <main>
      <ShopItem
          v-for="(item, index) in shopStore.shopItems" :key="index"
          :item="item"
          @click="shopStore.openDetailView(item.id)"
      />
    </main>
  </section>
  <FooterSection />
  <CopyrightSection />
</template>

<style scoped>
#shop-content {
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  column-gap: 15px;
  padding-top: 40px;
}

main {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

@media only screen and (min-width: 540px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 991px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1280px) {
  #shop-content {
    column-gap: 20px;
    padding: 40px 40px 120px;
  }

  main {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>