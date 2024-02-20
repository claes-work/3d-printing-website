<template>
  <section class="two-column-section">
    <div class="container">
      <div class="column">
        <slot name="left-column"></slot>
      </div>
      <div class="column">
        <slot name="right-column"></slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.column {
  flex: 1;
  height: 100%;
  margin-bottom: 35px;
}

@media only screen and (min-width: 991px) {
  .container {
    flex-direction: row;
  }

  .column {
    margin-bottom: 0;
  }
}
</style>