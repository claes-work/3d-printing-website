<script setup lang="ts">
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore";
import HamburgerBars from "@/components/icons/HamburgerBars.vue";
import {useScroll} from "@/composables/UseScroll";
import {RouterLink} from "vue-router";

const mainStore = useMainStore()
const route = useRoute()
const { scrollToSection } = useScroll()
function checkActiveRoute(routeName: string): boolean {
  return route.name === routeName
}
</script>

<template>
  <nav :class="{ active: mainStore.showMobileMenu }">
    <ul>
      <li :class="{ active: checkActiveRoute('home') }">
        <RouterLink :to="{ name: 'home' }">Übersicht</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('services') }">
        <a @click="scrollToSection('service-section')">Leistungen</a>
      </li>
      <li :class="{ active: checkActiveRoute('about') }">
        <RouterLink :to="{ name: 'about' }">Über mich</RouterLink>
      </li>
      <li v-if="false" :class="{ active: checkActiveRoute('shop') }">
        <RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
      </li>
      <li v-if="false" :class="{ active: checkActiveRoute('news') }">
        <RouterLink :to="{ name: 'news' }">News</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('imprint') }">
        <RouterLink :to="{ name: 'imprint' }">Kontakt</RouterLink>
      </li>
      <li>
        <a href="tel:+4917661475965">Jetzt Anrufen</a>
      </li>
    </ul>
    <button class="tertiary-btn" @click="mainStore.showMobileMenu = false">Menu schließen</button>
  </nav>
  <HamburgerBars @click="mainStore.showMobileMenu = true" />
</template>

<style scoped>
nav {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  background-color: #24262c;
  padding: 40px 15px 110px;
  display: flex;
  flex-direction: column;
  transition: 350ms ease-out;
  z-index: 50;
}

nav.active {
  right: 0;
}

ul {
  flex: 1
}

li {
  transition: background-color .15s, color .15s;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
}

li a {
  padding: 20px 16px;
  font-weight: 500;
  display: block;
}

li.active, li:hover {
  background-color: #FFFFFF;
}

li.active a, li:hover a {
  color: var(--primary-text-color-dark);
}

.tertiary-btn {
  width: 100%;
}

.close-icon {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
</style>