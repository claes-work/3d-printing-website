<script setup lang="ts">

</script>

<template>
  <section id="portfolio-section">
    <div class="container">
      <h2>Mehr zu meiner Person</h2>
      <p>Sie wollen mehr zu mir und meiner hauptberuflichen Tätigkeit als Softwareentwickler erfahren? Dann schauen Sie
        doch gerne auf meiner privaten Portfolio Webseite vorbei.</p>
      <a href="">
        <button class="primary-btn">Portfolio Webseite</button>
      </a>
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
  margin: 0 auto 35px;
}

.primary-btn {
  display: block;
  width: auto;
  margin: 0 auto;
}

@media only screen and (min-width: 1280px) {
  p {
    max-width: 800px;
    margin: 0 auto 50px;
  }
}
</style>