import { mount } from '@vue/test-utils'
import RansomNote from '@/components/RansomNote.vue'


describe('RansomNote', () => {
  const wrapper = mount(RansomNote, {
    propsData: {
      text: 'hi!'
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span>h</span><span>i</span><span>!</span>')
  })
})