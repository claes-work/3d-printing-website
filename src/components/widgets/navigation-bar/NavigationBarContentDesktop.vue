<script setup lang="ts">
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore";

const mainStore = useMainStore()
const route = useRoute()
function checkActiveRoute(routeName: string): boolean {
  return route.name === routeName
}
</script>

<template>
  <nav>
    <ul>
      <li :class="{ active: checkActiveRoute('home') }">
        <RouterLink :to="{ name: 'home' }">Übersicht</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('services') }">
        <RouterLink :to="{ name: 'services' }">Leistungen</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('about') }">
        <RouterLink :to="{ name: 'about' }">Über mich</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('shop') }">
        <RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
      </li>
      <li :class="{ active: checkActiveRoute('news') }">
        <RouterLink :to="{ name: 'news' }">News</RouterLink>
      </li>
    </ul>
  </nav>
  <a href="tel:+4917661475965"><button class="tertiary-btn">Kontak Aufnehmen</button></a>
</template>

<style scoped>
nav {
  background-color: #24262c;
  border-radius: 8px;
  padding: 10px;
}

ul {
  display: flex;
  align-items: center;
  column-gap: 5px;
}

li {
  transition: background-color .15s, color .15s;
  border-radius: 8px;
  cursor: pointer;
}

li a {
  padding: 12px 16px 10px;
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
  width: 200px;
}

.tertiary-btn {
  padding: 20px 15px;
}

@media only screen and (min-width: 1280px) {
  .tertiary-btn {
    width: 235px;
    padding: 20px 35px;
  }
}
</style>