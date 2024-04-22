<script setup lang="ts">
import ButtonWrapper from "@/components/widgets/ButtonWrapper.vue";
import {IButton} from "@/models/interfaces/IButton";

const primaryBtn: IButton = {
  title: 'Jetzt anrufen',
  href: 'tel:+4917661475965',
  target: ''
}

const secondaryBtn: IButton = {
  title: 'Email schreiben',
  href: 'mailto:info@3d-druck-jueterbog.de',
  target: ''
}
</script>

<template>
<section id="contact-section">
  <h2>Kontaktieren Sie mich noch heute!</h2>
  <div class="container">
    <p>Sie haben Fragen zum Bestell- oder 3D-Druckprozess? Vielleicht kann ich diese bereits im Vorfeld klären.</p>
    <ButtonWrapper
      :primary-btn="primaryBtn"
      :secondary-btn="secondaryBtn"
    />
  </div>
</section>
</template>

<style scoped>
#contact-section {
  background-color: #000000;
  border-radius: 65px 65px 0 0;
}

h2 {
  color: var(--primary-text-color-light);
  margin-bottom: 30px;
}

p {
  max-width: 550px;
  margin: 0 auto 35px;
  color: #DFDFDF;
  text-align: center;
}

.button-wrapper {
  margin: 0 auto;
}

@media only screen and (min-width: 991px) {
  .container {
    display: flex;
    align-items: center;
    column-gap: 50px;
  }

  h2 {
    max-width: 1280px;
    margin: 0 auto 45px;
  }

  h2, p {
    text-align: left;
  }

  p {
    margin: 0;
  }
}
</style>