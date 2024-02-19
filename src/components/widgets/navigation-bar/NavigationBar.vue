<script setup lang="ts">
import NavigationBarContentDesktop from "@/components/widgets/navigation-bar/NavigationBarContentDesktop.vue";
import NavigationBarContentMobile from "@/components/widgets/navigation-bar/NavigationBarContentMobile.vue";
import {useMainStore} from "@/stores/MainStore";

const mainStore = useMainStore()

</script>

<template>
  <section id="navbar">
    <div class="container">
      <RouterLink :to="{ name: 'home' }" class="logo-container">
        <img src="../../../assets/images/logo.png" alt="3D Druck Logo" class="logo" />
        <span>Expert</span>
      </RouterLink>
      <NavigationBarContentMobile v-if="!mainStore.isDesktop" />
      <NavigationBarContentDesktop v-if="mainStore.isDesktop" />
      <div class="background-underlay" :class="{ active: !mainStore.isDesktop && mainStore.showMobileMenu }"></div>
    </div>
  </section>
</template>

<style scoped>
#navbar {
  padding: 22px 20px;
  background-color: black;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 40;
}

.logo-container {
  width: 200px;
}

.tertiary-btn {
  padding: 20px 15px;
}

.background-underlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  background-color: rgba(0,0,0,0);
  transition: 200ms ease-out;
  z-index: 40;
}

.background-underlay.active {
  background-color: rgba(0,0,0,0.8);
}

@media only screen and (min-width: 1280px) {
  #navbar {
    padding: 30px 20px 22px ;
  }

  .logo-container {
    width: 235px;
  }
}
</style>