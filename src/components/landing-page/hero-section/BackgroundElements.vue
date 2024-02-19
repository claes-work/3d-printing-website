<script setup lang="ts">
</script>

<template>
  <img
      class="cube"
      src="../../../assets/images/Home_Hero_Cubes.png"
      alt="3D Druck Würfel"
  />
  <img
      class="ring"
      src="../../../assets/images/Home_Hero_Rings.png"
      alt="3D Druck Ring"
  />
</template>

<style scoped>
.cube, .ring {
  position: absolute;
  width: 75px;
}

.cube {
  top: 15%;
  width: 85px;
}

.ring {
  right: 0;
  top: 92%;
  z-index: 30;
}

@media only screen and (min-width: 475px) {
  .cube, .ring {
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .cube, .ring {
    width: 140px;
  }

  .cube {
    top: 34%;
  }

  .ring {
    top: 94%;
  }
}

@media only screen and (min-width: 991px) {
  .cube {
    width: 160px;
    top: 22%;
  }

  .ring {
    width: 180px;
    top: 58%;
  }
}

@media only screen and (min-width: 1280px) {
  .cube {
    width: 180px;
  }

  .ring {
    width: 210px;
  }
}
</style>