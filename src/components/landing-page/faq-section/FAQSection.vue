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
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia"
      />
      <AccordionItem
          number="2."
          title="Wie lange dauert der 3D-Druckprozess in der Regel?"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia"
      />
      <AccordionItem
          number="3."
          title="Wie funktioniert der Bestellprozess bei maßgeschneiderten Designs?"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia"
      />
      <AccordionItem
          number="4."
          title="Was passiert, wenn mein 3D-Modell Fehler aufweist?"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia"
      />
      <AccordionItem
          number="5."
          title="Welche Dateiformate akzeptieren Sie für die 3D-Modelle?"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia"
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
}

h2 {
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