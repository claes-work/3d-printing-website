<script setup lang="ts">
import NavigationBar from "@/components/widgets/navigation-bar/NavigationBar.vue";
import {onMounted, ref} from "vue";
import type {Ref} from "vue";
import type {IShopItem} from "@/models/interfaces/IShopItem";
import {useShopStore} from "@/stores/ShopStore";
import router from "@/router";
import {useRoute} from "vue-router";
import type {RouteParamValue} from "vue-router";
import ShopDetailHeader from "@/components/shop/shop-detail/ShopDetailHeader.vue";
import FooterSection from "@/components/widgets/FooterSection.vue";
import CopyrightSection from "@/components/widgets/CopyrightSection.vue";
import NewsBanner from "@/components/widgets/banner/NewsBanner.vue";


const shopStore = useShopStore()
const route = useRoute()

const product: Ref<IShopItem> = ref({} as IShopItem)

onMounted(() => {
  const productId: string | RouteParamValue[] = route.params.id
  if (typeof productId !== "string") {
    leaveDetailView()
  } else {
    const shownProduct = shopStore.getShopItem(parseInt(productId))
    if (shownProduct === undefined) {
      leaveDetailView()
    } else {
      product.value = shownProduct
      console.log(product.value.src)
    }
  }
})

const leaveDetailView = () => router.push({ name: 'shop' })
</script>

<template>
  <NewsBanner v-show="false" />
  <NavigationBar/>
  <ShopDetailHeader :product="product" />
  <FooterSection />
  <CopyrightSection/>
</template>