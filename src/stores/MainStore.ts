import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {

  // Flag that indicates if the viewport with is at least 991px
  const isDesktop: Ref<boolean> = ref(window.innerWidth >= 991)

  // Flag that indicates if the mobile navbar menu is actively shown
  const showMobileMenu: Ref<boolean> = ref(false)

  // Flag that indicates if the discount banner is actively shown
  const showBanner: Ref<boolean> = ref(true)

  // Check viewport with on resize
  window.onresize = (): void => {
    isDesktop.value =  (window.innerWidth >= 991)
  }

  return {
    isDesktop,
    showMobileMenu,
    showBanner
  }
})
