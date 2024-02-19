import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from "@/views/ShopView.vue";
import {useMainStore} from "@/stores/MainStore";
import ShopDetailView from "@/views/ShopDetailView.vue";
import NewsView from "@/views/NewsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/shop/:id',
      name: 'shop-detail',
      component: ShopDetailView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ]
})

router.afterEach(() => {
  const mainStore = useMainStore()
  mainStore.showMobileMenu = false
})

export default router
