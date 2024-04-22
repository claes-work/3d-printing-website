<script setup lang="ts">
import BackgroundCircles from "@/components/about-page/personal-section/BackgroundCircles.vue";
</script>

<template>
  <div class="container">
    <div class="text-wrapper">
      <h2>Wer bin ich?</h2>
      <p>Hi! Ich bin Sebastian, 25 Jahre alt und arbeite hauptberuflich als Softwareentwickler. Vor über 5 Jahren habe
        ich
        mir meinen ersten 3D-Drucker gekauft und seitdem bin ich verrückt danach. Über die Jahre habe ich bereits
        unzählige Projekte umgesetzt und konnte mir somit ein solides Expertenwissen aufbauen. Ich bin stolz darauf mein
        Hobby nun auch als gewerblich Nebentätigkeit ausführen. Gerne möchte ich Ihnen dabei helfen in die Welt des
        3D-Drucks einzutauchen und Sie bei Ihren persönlichen oder gewerblichen Projekten als kompetenter Berater,
        Entwickler und Produzent zu unterstützen.</p>
    </div>
    <img
        src="@/assets/images/Sebastian_Claes_Hero_Image.png"
        alt="Sebastian Claes Hero Image"
    />
  </div>
  <BackgroundCircles/>
</template>

<style scoped>
.container {
  z-index: 25;
}

h2, p {
  color: #FFFFFF;
  text-align: left;
}

.text-wrapper {
  margin-bottom: 25px;
}

img {
  display: block;
  width: 80%;
  max-width: 450px;
  margin: 0 auto -50px;
}

@media only screen and (min-width: 991px) {
  .container {
    display: flex;
    align-items: center;
    column-gap: 50px;
  }

  .text-wrapper {
    max-width: 60%;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
  }

  img {
    position: absolute;
    bottom: -100px;
    right: 0;
    height: calc(100% + 200px);
    width: auto;
  }
}

</style>