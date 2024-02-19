<script setup lang="ts">
import {useMainStore} from "@/stores/MainStore";
import AccordionIcon from "@/components/widgets/accordion/AccordionIcon.vue";

const mainStore = useMainStore()
</script>

<template>
  <aside v-if="mainStore.isDesktop">
    <ul>
      <li>
        <h5>Spielzeug <AccordionIcon/></h5>
        <ul>
          <li><span>0 - 4</span> Jahre</li>
          <li><span>4 - 8</span> Jahre</li>
          <li><span>8 - 14</span> Jahre</li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        <h5>Dekoration <AccordionIcon/></h5>
      </li>
      <li>
        <h5>Garten <AccordionIcon/></h5>
      </li>
      <li>
        <h5>Handwerk <AccordionIcon/></h5>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  min-width: 210px;
  width: 18%;
  max-width: 300px;
  background-image: linear-gradient(to bottom, #EFF2F6, white);
  border-radius: 25px;
}

ul {
  width: 100%;
  padding: 20px 20px 0 20px;
}

ul li:not(ul li ul li) {
  border-bottom: 1px solid rgba(0,0,0,0.15);
  margin-bottom: 10px;
  padding-bottom: 10px;
}

h5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
}

li ul li {
  cursor: pointer;
  margin-bottom: 12px;
}

li ul li span {
  display: inline-block;
  width: 45px;
}

.accordion-icon-wrapper {
  background-color: unset;
}

@media only screen and (min-width: 1280px) {
  aside {
    border-radius: 35px;
  }
}
</style>