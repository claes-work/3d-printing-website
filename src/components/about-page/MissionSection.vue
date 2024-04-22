<script setup lang="ts">

</script>

<template>
  <section id="mission-section">
    <div class="container">
      <h2>Meine Mission ist es Ihre Ideen zum Leben zu erwecken</h2>
      <p>Ihre Ideen werden Realität. Mit 3D-Drucktechnologie und Präzision forme ich Ihre Visionen in greifbare Objekte. Gemeinsam verwirklichen wir innovative Designs.</p>
      <img class="left-star" src="@/assets/images/about-page-flat-star.png" alt="Flat Start Background Image" />
      <img class="right-star" src="@/assets/images/about-page-star.png" alt="Start Background Image" />
    </div>
  </section>
</template>

<style scoped>
h2, p {
  position: relative;
  z-index: 10;
}

p {
  max-width: 650px;
  text-align: center;
  margin: 0 auto;
}

.left-star, .right-star {
  width: 20%;
  position: absolute;
  z-index: 0;
  display: none;
}

@media only screen and (min-width: 768px) {
  .left-star, .right-star {
    max-width: 180px;
    display: block;
  }

  .left-star {
    bottom: -60px;
    left: -40px;
  }

  .right-star {
    top: 25px;
    right: -50px;
  }
}

@media only screen and (min-width: 1280px) {
  .left-star {
    bottom: -20px;
    left: 0px;
  }

  .right-star {
    top: -60px;
    right: -120px;
  }

  p {
    max-width: 800px;
  }
}
</style>