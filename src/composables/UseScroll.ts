import {useMainStore} from "@/stores/MainStore";

export function useScroll() {

    const mainStore = useMainStore()
    function scrollToSection(sectionId: string): void {
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