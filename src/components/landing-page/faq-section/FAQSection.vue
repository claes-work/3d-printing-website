<script setup lang="ts">
import AccordionItem from "@/components/widgets/accordion/AccordionItem.vue";
</script>

<template>
  <section id="faq-section">
    <div class="container">
      <h2>Häufig gestellte Fragen</h2>
      <p>Sie haben Fragen zum Bestell- oder 3D-Druckprozess? Vielleicht kann ich diese bereits im Vorfeld klären.</p>
      <AccordionItem
        number="1."
        title="Welche Materialien kommen für mein Projekt in Frage?"
        text="Für Ihr Projekt stehen verschiedene Materialien zur Verfügung, darunter PLA, ABS, PETG, TPU und vieles mehr. Die Auswahl des Materials hängt von den spezifischen Anforderungen Ihres Projekts ab, einschließlich Festigkeit, Flexibilität, Hitzebeständigkeit und Oberflächenbeschaffung. Grundsätzlich werden die meisten Drucke in PLA angefertigt, ohne Hintergrundinformationen lässt sich allerdings keine allgemeingültige Aussage darüber treffen, welches Material sich für Ihr Projekt am besten anbietet."
      />
      <AccordionItem
          number="2."
          title="Wie lange dauert der 3D-Druckprozess in der Regel?"
          text="Die Dauer des 3D-Druckprozesses hängt von verschiedenen Faktoren ab, darunter die Größe und Komplexität des Objekts, das ausgewählte Material und die Schichthöhe. In der Regel kann ich Ihnen jedoch eine Schätzung abgeben, sobald ich Ihr 3D-Modell und Ihre Druckanforderungen kenne."
      />
      <AccordionItem
          number="3."
          title="Bieten Sie auch 3D-Modellierungsdienste an, falls ich kein eigenes Modell habe?"
          text="Ja, wir bieten auch 3D-Modellierungsdienste an, falls Sie kein eigenes Modell haben. Unsere erfahrenen Designer können basierend auf Ihren Anforderungen und Vorstellungen ein maßgeschneidertes 3D-Modell für Sie erstellen. Kontaktieren Sie uns einfach, um Ihre Ideen zu besprechen, und wir kümmern uns um den Rest."
      />
      <AccordionItem
          number="4."
          title="Welche Druckauflösung verwenden Sie für die 3D-Druckaufträge?"
          text="Wir verwenden je nach Projekt und Anforderungen unterschiedliche Druckauflösungen. Für detaillierte und präzise Modelle verwenden wir in der Regel eine höhere Druckauflösung, während für Prototypen oder größere Objekte eine niedrigere Auflösung ausreichen kann. Wir beraten Sie gerne bei der Auswahl der optimalen Druckauflösung für Ihr Projekt."
      />
    </div>
  </section>
</template>

<style scoped>
#faq-section {
  background-color: #000000;
  border-radius: 65px 65px 0 0;
}

.container {
  max-width: 780px;
}

h2 {
  color: var(--primary-text-color-light);
  margin-bottom: 30px;
}

p {
  max-width: 550px;
  margin: 0 auto 60px;
  color: #DFDFDF;
  text-align: center;
}

.divider {

}
</style>