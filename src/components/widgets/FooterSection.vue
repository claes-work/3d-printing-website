<script setup lang="ts">
import CaretRightIcon from "@/components/icons/CaretIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";
import {RouterLink} from "vue-router";
</script>

<template>
  <footer>
    <div class="container">
      <div class="outro-column">
        <div class="logo-container">
          <img src="@/assets/images/logo.png" alt="3D Druck Logo" class="logo" />
          <span>Expert</span>
        </div>
        <p class="outro-text">Vielen Dank für Ihren Besuch! Ich bin stolz darauf, Ihre kreativen Ideen zum Leben zu erwecken. Durchstöbern Sie unseren Shop für eine inspirierende Produktpalette – von maßgeschneiderten Modellen bis hin zu einzigartigen Kunstwerken. Lassen Sie uns gemeinsam die Grenzen des 3D-Drucks erkunden. Ihr Vertrauen bedeutet mir viel. Sebastian Claes  – Wo Kreativität und Innovation Hand in Hand gehen.</p>
      </div>
      <div class="link-column">
        <h4>Hilfreiche Links</h4>
        <ul>
          <li v-if="false">
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <a href="#">3D-Druck Verfahren</a>
          </li>
          <li>
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <a href="#">Materialauswahl</a>
          </li>
          <li>
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <RouterLink :to="{name: 'imprint'}">Impressum</RouterLink>
          </li>
          <li>
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <RouterLink :to="{name: 'dsgvo'}">Datenschutzerklärung</RouterLink>
          </li>
          <li v-if="false">
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <a href="#">Geschäftskunden</a>
          </li>
          <li>
            <CaretRightIcon fill="var(--green-yellow)" :direction="IconDirectionEnum.RIGHT" />
            <a href="tel:+4917661475965">Kontakt aufnehmen</a>
          </li>
        </ul>
      </div>
      <div class="contact-column">
        <h4>In Kontakt treten</h4>
        <div class="contact-wrapper">
          <div class="block">
            <PhoneIcon />
          </div>
          <div>
            <p>Rufen Sie mich an</p>
            <a href="tel:+4917661475965">+49 176 614 759 65</a>
          </div>
        </div>
        <div class="contact-wrapper">
          <div class="block">
            <EmailIcon />
          </div>
          <div>
            <p>Schreiben Sie mir</p>
            <a href="mailto:info@3d-druck-jueterbog.de">info@3d-druck-jueterbog.de</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #000000;
  padding: 32px 20px 22px;
}

.container {
  display: flex;
  flex-direction: column;
}

.logo-container {
  justify-content: center;
  margin-bottom: 25px;
}

.outro-column a {
  display: flex;
  justify-content: center;
  margin: 0 auto 22px;
}

.outro-text {
  color: var(--primary-text-color-light);
}

h4 {
  color: var(--primary-text-color-light);
  text-align: left;
}

li {
  display: flex;
  align-items: center;
  column-gap: 8px;
  border-top-style: dashed;
  border-top-width: 1px;
  border-color: #FFFFFF3B;
  padding: 8px 0px;
}

li a {
  color: var(--primary-text-color-light);
  font-weight: 400;
}

li a:hover {
  color: var(--green-yellow);
}

li svg {
  width: 10px;
}

.contact-wrapper {
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 18px;
}

.block {
  width: 35px;
  height: 35px;
  background-color: #FFFFFF;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-wrapper p, a {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 1.2px;
}

.contact-wrapper p {
  color: var(--green-yellow);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-wrapper a {
  color: var(--primary-text-color-light);
}

.block {
  background-color: #24262c;
}

@media only screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 35px;
  }

  .logo-container {
    justify-content: flex-start;
  }

  h4 {
    margin: 20px 0 28px;
  }

  .outro-column {
    flex: 1;
    max-width: 390px;
  }

  .outro-column a {
    justify-content: flex-start;
  }

  .outro-text {
    font-size: 13px;
    text-align: left;
  }
}

@media only screen and (min-width: 991px) {
  .link-column,
  .contact-column {
    width: 230px;
  }

  .outro-text {
    font-size: 14px;
  }
}

@media only screen and (min-width: 1024px) {
  .contact-wrapper p, a {
    font-size: 15px;
  }
}

@media only screen and (min-width: 1200px) {
  .link-column {
    width: 260px;
  }

  .contact-column {
    width: 320px;
  }

  .outro-text {
    font-size: 15px;
  }
}

@media only screen and (min-width: 1280px) {
  .outro-column {
    max-width: 476px;
  }

  h4 {
    margin: 20px 0 24px;
  }
}
</style>