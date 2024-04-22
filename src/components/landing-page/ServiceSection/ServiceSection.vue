<script setup lang="ts">
import ServiceCard from "@/components/landing-page/ServiceSection/ServiceCard.vue";
</script>

<template>
  <section id="service-section">
    <div class="container">
      <h2>Meine Leistungen</h2>
      <div class="card-wrapper">
        <ServiceCard
            title="3D-Druck Beratung"
            text="Sie haben Fragen zur Machbarkeit eines Projekts, Materialauswahl oder möchten mehr über die verschiedenen 3D-Druck Fertigungsverfahren erfahren? Holen Sie sich jetzt eine umfangreiche Expertenberatung ein! Gemeinsam gehen wir Ihr Vorhaben durch und klären alle Ihre Fragen."
            link-text="Jetzt beraten lassen"
            link-route="tel:+4917661475965"
        >
          <template #icon>
            <img
                class="service-icon"
                src="../../../assets/images/service-cube.png"
                alt="Service Cube"
            />
          </template>
        </ServiceCard>

        <ServiceCard
            title="3D Modellierung"
            text="Professionelle 3D Modellierung für jedes Vorhaben. Ob Produktentwicklung, Architekturvisualisierung oder individuelle Projekte - ich bringe Ihre Visionen zum Leben. Profitieren Sie von meiner Erfahrung und starten Sie noch heute Ihr 3D-Modellierungsprojekt!"
            link-text="Mehr erfahren"
            link-route="tel:+4917661475965"
        >
          <template #icon>
            <img
                class="service-icon"
                src="../../../assets/images/service-star.png"
                alt="Service Star"
            />
          </template>
        </ServiceCard>

        <ServiceCard
            title="3D Produkt Katalog"
            text="Entdecken Sie meine beeindruckende 3D-Druck Produktpalette! Von maßgeschneiderten Prototypen bis hin zu Spielzeug und kreativen Designs bieten wir eine vielfältige Auswahl. Lassen Sie sich von innovativen 3D-Drucklösungen inspirieren."
            link-text="Produkte ansehen"
            link-route="#"
        >
          <template #icon>
            <img
                class="service-icon"
                src="../../../assets/images/service-cube-complex.png"
                alt="Service Cube Complex"
            />
          </template>
        </ServiceCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: left;
}

.card-wrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.service-icon {
  position: absolute;
  right: 12px;
  bottom: 55px;
  width: 150px;
}

@media only screen and (min-width: 460px) {
  .service-icon {
    right: 12px;
    bottom: 38px;
  }
}

@media only screen and (min-width: 540px) {
  .service-icon {
    width: 200px;
  }
}

@media only screen and (min-width: 768px) {
  .card-wrapper {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 24px;
  }

  .service-icon {
    width: 160px;
    bottom: 55px;
  }
}

@media only screen and (min-width: 991px) {
  .service-icon {
    width: 180px;
    bottom: 55px;
  }
}

@media only screen and (min-width: 1280px) {
  .card-wrapper {
    margin-top: 40px;
    flex-wrap: unset;
    column-gap: 24px;
  }

  .service-icon {
    width: 200px;
    right: 0;
    bottom: 55px;
  }
}
</style>