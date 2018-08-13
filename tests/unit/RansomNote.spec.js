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
  
  it('randomizes font color', () => {
    const s = wrapper.findAll('span').wrappers
    const styles = s.map(function(w) {return w.element.style['FontColor']})
    
    expect(new Set(styles).size).toBeGreaterThan(1)
  })
})

describe('RansomNote disabled options', () => {

  it('disables font color randomizing', () => {
    const wrapper = mount(RansomNote, {
      propsData: {
        text: 'hello',
        randomFontColor: false
      }
    })
    const s = wrapper.findAll('span').wrappers
    const styles = s.map(function(w) {return w.element.style['FontColor']})
    
    expect(new Set(styles).size).toEqual(1)
  })
})
