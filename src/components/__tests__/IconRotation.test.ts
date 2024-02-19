import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import ButtonArrowIcon from '@/components/icons/ButtonArrowIcon.vue'
import CaretIcon from '@/components/icons/CaretIcon.vue'
import {IconDirectionEnum} from '@/models/enums/IconDirectionEnum'
interface IDirectionTest {
    component: {
        __name: string,
    }
    angle: {
        up: number
        down: number
        left: number
        right: number
    }
}

describe('Tests if all icon rotation props work as intended', () => {

    // All icons that have direction angles to test 
    const allIcons: IDirectionTest []= [
        {
            component: ButtonArrowIcon,
            angle: {
                up: -90,
                down: 90,
                left: 180,
                right: 0,
            }
        },
        {
            component: CaretIcon,
            angle: {
                up: -90,
                down: 90,
                left: 180,
                right: 0,
            }
        }
    ]

    // Check for each icon component with direction prop if it renders the with the correct direction
    for (const IconComponent of allIcons) {


        it(`rotates ${IconComponent.component['__name']} UP`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.UP}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.up}deg)`)
        })

        it(`rotates ${IconComponent.component['__name']} DOWN`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.DOWN}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.down}deg)`)
        })

        it(`rotates ${IconComponent.component['__name']} LEFT`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.LEFT}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.left}deg)`)
        })

        it(`rotates ${IconComponent.component['__name']} RIGHT`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.RIGHT}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.right}deg)`)
        })
    }
})
