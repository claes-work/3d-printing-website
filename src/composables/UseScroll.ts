import {useMainStore} from "@/stores/MainStore";
import {useRoute, useRouter} from "vue-router";

export function useScroll() {

    const mainStore = useMainStore()
    const route = useRoute()
    const router = useRouter()

    async function scrollToSection(sectionId: string): Promise<void> {
        if (route.name !== 'home') {
            await router.push({name: 'home'})
        }

        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop
            });
            mainStore.showMobileMenu = false
        }
    }

    return { scrollToSection }
}