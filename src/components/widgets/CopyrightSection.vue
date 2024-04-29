<script setup lang="ts">
import CaretRightIcon from "@/components/icons/CaretIcon.vue";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";
import {RouterLink} from "vue-router";
</script>

<template>
  <section id="copyright">
    <div class="container">
      <p>Copyright © 2024 3d-druck-jueterbog.de, Alle Rechte vorbehalten. Entwickelt von <a href="https://portfolio.claes-work.de/" target="_blank">Sebastian Claes</a>.</p>
      <ul>
        <li v-if="false">
          <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
          <a href="#">Nutzungsbedingungen</a>
        </li>
        <li>
          <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
          <RouterLink :to="{name: 'dsgvo'}">Datenschutzerklärung</RouterLink>
        </li>
        <li>
          <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
          <RouterLink :to="{name: 'imprint'}">Impressum</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #000000;
  padding: 0 20px;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, .3);
  padding: 16px 0;
}

p {
  letter-spacing: .2px;
  text-align: center;
  line-height: 15px;
  margin-bottom: 15px;
}

p, a {
  color: var(--primary-text-color-light);
  font-size: 11px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

a {
  color: var(--green-yellow);
  text-decoration: underline;
}

ul {
  max-width: 460px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
}

li {
  display: flex;
  align-items: center;
  column-gap: 5px;
}

@media only screen and (min-width: 1024px) {
  p, a {
    font-size: 12px;
  }

  p {
    margin-bottom: 8px;
  }
}

@media only screen and (min-width: 1280px) {
  p {
    text-align: left;
    margin-bottom: 0;
  }

  p, a {
    font-weight: 500;
  }

  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    column-gap: 16px;
  }
}
</style>