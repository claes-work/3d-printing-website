<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const settings =  {
  itemsToShow: 1,
  itemsToScroll: 1,
  autoplay: 2500,
  transition: 1000
}

const breakpoints = {
  768: {
    itemsToShow: 1.5,
    wrapAround: true,
    snapAlign: 'center',
    itemsToScroll: 1,
    autoplay: 2500,
    transition: 1000
  },
  1280: {
    itemsToShow: 2.25,
    wrapAround: true,
    snapAlign: 'center',
    itemsToScroll: 1,
    autoplay: 2500,
    transition: 1000
  },
}

const images = [
  {
    src: "assets/images/3D-gedrucktes-Düsentriebwerk.png",
    alt :"3D gedrucktes Düsentriebwerk",
    caption: "Düsentriebwerk"
  },
  {
    src: "assets/images/3D-gedrucktes-Schloss-Neuschwanstein.png",
    alt :"3D gedrucktes Schloss Neuschwanstein",
    caption: "Schloss Neuschwanstein"
  },
  {
    src: "assets/images/3D-gedruckte-Hinterachse-mit-Rädern.png",
    alt :"3D gedruckte Hinterachse mit Rädern",
    caption: "Ossum Hinterachse Mk 3"
  },
  {
    src: "assets/images/3D-gedruckte-Godzilla-Figur.png",
    alt :"3D gedruckte Godzilla Figur",
    caption: "Kaiju"
  },
  {
    src: "assets/images/3D-gedrucktes-Differenzialgetriebe.png",
    alt :"3D gedrucktes Differenzialgetriebe",
    caption: "Differenzialgetriebe"
  },
  {
    src: "assets/images/3D-Druck-Fertigungsteile.png",
    alt :"3D Druck Fertigungsteile",
    caption: "Fertigungsteile"
  },
  {
    src: "assets/images/3D-Druck-Zahnräder-und-Ringe.png",
    alt :"3D Druck Zahnräder und Ringe",
    caption: "Zahnräder und Ringe"
  },
  {
    src: "assets/images/3D-gedrucktes-Gehäuse-Raspberry-Pi-4.png",
    alt :"3D gedrucktes Gehäuse Raspberry Pi 4",
    caption: "Raspberry Pi 4 Gehäuse und Ständer"
  },
]
</script>

<template>
  <section id="gallery-section">
    <p class="subheading">3D-Druck Vielfallt ohne Grenzen</p>
    <h2>Lassen Sie sich inspirieren</h2>
    <carousel
        v-bind="settings" :breakpoints="breakpoints"
    >
      <slide v-for="(image, index) in images" :key="index">
        <div>
          <img
              class="gallery-image"
              :src="$image(image.src)"
              :alt="image.alt"
          />
          <h4>{{ image.caption }}</h4>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<style>
#gallery-section {
  padding-left: 0;
  padding-right: 0;
}

h2 {
  text-align: center;
}

.subheading {
  letter-spacing: .3em;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  color: rgba(6, 8, 15, .5);
  text-align: center;
}

h4 {
  margin-top: 27px;
  font-size: 25px;
  line-height: 30px;
  color: rgb(66, 66, 66);
  font-weight: 400;
  text-align: center;
}

.carousel {
  padding: 0;
}

.gallery-image {
  width: 95%;
  aspect-ratio: 2/1.2;
  object-fit: cover;
  border-radius: 30px;
}

.carousel__pagination-button::after {
  width: 35px;
  background: rgb(238, 238, 238);
}

.carousel__pagination-button--active::after {
  background-color: #4b4b4b;
}

.carousel__pagination {
  padding: 0;
}
</style>