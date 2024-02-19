import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router";
import type {IShopItem} from "@/models/interfaces/IShopItem";

export const useShopStore = defineStore('shopStore', () => {

  // Flag that indicates if the viewport with is at least 991px
  const shopItems: Ref<IShopItem[]> = ref([
    {
      id: 1,
      src: "assets/images/3D-gedrucktes-Düsentriebwerk.png",
      title: "Düsentriebwerk",
      shortDescription: "Unser 3D-gedrucktes Düsentriebwerk ist eine präzise und detailreiche Miniaturversion modernster Flugzeugtechnologie. Das perfekte Geschenk für Technikliebhaber und Luftfahrtenthusiasten. Dieses Produkt verleiht jedem Raum eine futuristische Note.",
      price: "82,99"
    },
    {
      id: 2,
      src: "assets/images/3D-gedrucktes-Schloss-Neuschwanstein.png",
      title: "Schloss Neuschwanstein",
      shortDescription: "",
      price: "264,99"
    },
    {
      id: 3,
      src: "assets/images/3D-gedruckte-Hinterachse-mit-Rädern.png",
      title: "Ossum Hinterachse Mk 3",
      shortDescription: "",
      price: "18,99"
    },
    {
      id: 4,
      src: "assets/images/3D-gedruckte-Godzilla-Figur.png",
      title: "Kaiju",
      shortDescription: "",
      price: "46,99"
    },
    {
      id: 5,
      src: "assets/images/3D-gedrucktes-Differenzialgetriebe.png",
      title: "Differenzialgetriebe",
      shortDescription: "",
      price: "12,99"
    },
    {
      id: 6,
      src: "assets/images/3D-Druck-Fertigungsteile.png",
      title: "Fertigungsteile",
      shortDescription: "",
      price: "je 6,80"
    },
    {
      id: 7,
      src: "assets/images/3D-Druck-Zahnräder-und-Ringe.png",
      title: "Zahnräder und Ringe",
      shortDescription: "",
      price: "je 3,99"
    },
    {
      id: 8,
      src: "assets/images/3D-gedrucktes-Gehäuse-Raspberry-Pi-4.png",
      title: "Raspberry Pi 4 Gehäuse und Ständer",
      shortDescription: "",
      price: "12,99"
    },
  ])

  /**
   * Open the product detail view based on the product id
   *
   * @param id string
   *
   * @return void
   */
  function openDetailView(id: number): void {
    router.push({
      name: 'shop-detail',
      params: {
        id: id
      }
    })
  }

  /**
   * Get a single product from shopItems array
   *
   * @param id string
   *
   * @return IShopItem | undefined
   */
  function getShopItem(id: number): IShopItem | undefined {
    return shopItems.value.find(
        (item: IShopItem): boolean => item.id === id
    );
  }

  return {
    shopItems,
    openDetailView,
    getShopItem
  }
})
