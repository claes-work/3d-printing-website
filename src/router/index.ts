import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from "@/views/ShopView.vue";
import {useMainStore} from "@/stores/MainStore";
import ShopDetailView from "@/views/ShopDetailView.vue";
import NewsView from "@/views/NewsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ImprintView from "@/views/ImprintView.vue";
import DSGVOView from "@/views/DSGVOView.vue";

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
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
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
      path: '/imprint',
      name: 'imprint',
      component: ImprintView,
    },
    {
      path: '/dsgvo',
      name: 'dsgvo',
      component: DSGVOView,
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
