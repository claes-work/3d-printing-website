<script setup lang="ts">
import PrinterPropertiesContent from "@/components/landing-page/printer-properties-section/PrinterPropertiesContent.vue";
import MultipleStars from "@/components/icons/MultipleStars.vue";
</script>

<template>
  <section id="printer-properties-section">
    <div class="container">
      <PrinterPropertiesContent />
      <img
          class="printer-image"
          src="../../../assets/images/bambu-lab-x1-carbon-combo-3d-drucker.png"
          alt="Bambu Lab x1 Carbon Combo 3D Drucker"
      />
      <MultipleStars />
    </div>
    <img
        class="star"
        src="../../../assets/images/printer-property-star-ring.png"
        alt="3D Model Ring"
    />
    <img
        class="ring"
        src="../../../assets/images/printer-property-ring.png"
        alt="3D Model Ring"
    />
  </section>
</template>

<style scoped>
#printer-properties-section {
  background-image: linear-gradient(130deg, var(--main-color), #244DD8);
  border-radius: 65px;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.printer-image {
  width: 100%;
}

svg {
  display: none;
}

.ring, .star {
  display: none;
  position: absolute;
}

.ring {
  top: 0;
  right: 30px;
  transform: translateY(-30%);
  width: 200px;
}

.star {
  bottom: 0;
  left: 30px;
  transform: rotate(75deg);
  width: 200px;
}

@media only screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .printer-image {
    max-width: 550px;
    margin-right: -80px;
    margin-top: -75px;
  }
}

@media only screen and (min-width: 991px) {
  .printer-image {
    max-width: 500px;
  }
}

@media only screen and (min-width: 1180px) {
  .printer-image {
    margin-top: 0;
    max-width: 550px;
  }
}
@media only screen and (min-width: 1280px) {
  #printer-properties-section {
    overflow: visible;
  }

  .printer-image {
    max-width: 660px;
    margin-right: -130px;
  }

  svg {
    display: block;
    position: absolute;
    top: -55px;
    left: -120px;
  }

  .ring, .star {
    display: block;
  }
}


@media only screen and (min-width: 1600px) {
  .ring {
    right: 30px;
    width: 250px;
  }

  .star {
    bottom: 30px;
    width: 200px;
  }
}

@media only screen and (min-width: 1780px) {
  .ring {
    right: 30px;
    width: 280px;
  }

  .star {
    bottom: 80px;
  }
}
</style>