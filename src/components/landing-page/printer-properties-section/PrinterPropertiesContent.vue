<script setup lang="ts">
import PrinterProperty from "@/components/landing-page/printer-properties-section/PrinterProperty.vue";
</script>

<template>
  <div class="content">
    <p class="subtitle">Die Leistungsfähigkeit meines 3D-Druckers im Überblick:</p>
    <h2>Geschwindigkeit, Präzision und Mehrfarbdrucke</h2>
    <p>Ich biete Revolution im 3D-Druck. Mit meinem hochmodernen x1 Carbon Combo Drucker kann ich nicht nur Höchstgeschwindigkeiten erzielen, sondern auch die faszinierende Vielfalt von mehreren Farben und Materialien in einem Druckdurchgang verwenden.</p>
    <div class="divider"></div>
    <div class="property-wrapper">
      <PrinterProperty
          value="32+"
          label="Farben"
      />
      <PrinterProperty
          value="12+"
          label="Materialien"
      />
      <PrinterProperty
          value="7+"
          label="Veredelungen"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
}

h2 {
  color: var(--primary-text-color-light);
  text-align: left;
}

.subtitle {
  color: #b3ff10;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0;
}

p {
  color: var(--primary-text-color-light);
  margin-bottom: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, .5);
  margin: 40px 0;
}

@media only screen and (min-width: 768px) {
  .content {
    max-width: 400px;
  }

  .property-wrapper {
    display: flex;
    column-gap: 32px;
  }
}

@media only screen and (min-width: 991px) {
  .content {
    max-width: 600px;
  }
}

@media only screen and (min-width: 991px) {
  h2 {
    margin-bottom: 32px;
  }
}
</style>