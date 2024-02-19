import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CaretIcon from "@/components/icons/CaretIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import HamburgerBars from "@/components/icons/HamburgerBars.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import ScrollArrowIcon from "@/components/icons/ScrollArrowIcon.vue";
import HeroStar from "@/components/icons/HeroStar.vue";
import MultipleStars from "@/components/icons/MultipleStars.vue";

describe('Tests if all icon fill props work as intended', (): void => {

    const sampleIconFill: string = '#2ECC71';
    const defaultIconFill: string = '#FFFFFF';

    // All icons that where svg has direct fill
    const allIcons: { __name: string }[] = [
        CaretIcon,
        CloseIcon,
        EmailIcon,
        HamburgerBars,
        HeroStar,
        MultipleStars,
        PhoneIcon,
        ScrollArrowIcon
    ];

    // fill attribute is on path since all nav button icons are in a additional wrapper
    /*const allNavigationBarIcons: Component[] = [

    ]*/

    // Check for each icon component if it renders the default fill or a custom fill properly
    for (const IconComponent of allIcons) {
        it(`sets the default fill value correctly for ${IconComponent['__name']}`, (): void => {
            const wrapper = mount(IconComponent);
            expect(wrapper.find('svg').attributes('fill')).toBe(defaultIconFill);
        });

        it(`sets the fill attribute correctly for ${IconComponent['__name']}`, (): void => {
            const wrapper = mount(IconComponent, { props: { fill: sampleIconFill } });
            expect(wrapper.find('svg').attributes('fill')).toBe(sampleIconFill);
        });
    }
});
