import { mount } from '@vue/test-utils'
import RansomLetter from '@/components/RansomLetter.vue'


describe('RansomLetter', () => {
  const wrapper = mount(RansomLetter, {
    propsData: {
      letter: 'h'
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span>h</span>')
  })
})