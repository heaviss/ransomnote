import { mount } from '@vue/test-utils'
import RansomNote from '@/components/RansomNote.vue'

function get_span_styles(wrapper, property) {
  const s = wrapper.findAll('span').wrappers
  return s.map(function(w) {return w.element.style[property]})
}

describe('RansomNote', () => {
  const wrapper = mount(RansomNote, {
    propsData: {
      text: 'hi !'
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span>h</span><span>i</span> <span>!</span>')
  })

  it('randomizes font color', () => {
    const styles = get_span_styles(wrapper, 'FontColor')
    
    expect(new Set(styles).size).toBeGreaterThan(1)
  })

  it('randomizes background color', () => {
    const styles = get_span_styles(wrapper, 'BackColor')
    
    expect(new Set(styles).size).toBeGreaterThan(1)
  })

  it('randomizes font case', () => {
    wrapper.setProps({ text: 'ooooooooooooooooooooooooooo' })
    const styles = get_span_styles(wrapper, 'FontCase')
    
    expect(new Set(styles).size).toEqual(3)
  })
})

describe('RansomNote with disabled options', () => {

  it('disables font color randomizing', () => {
    const wrapper = mount(RansomNote, {
      propsData: {
        text: 'hello',
        randomFontColor: false
      }
    })
    const styles = get_span_styles(wrapper, 'FontColor')
    
    expect(new Set(styles).size).toEqual(1)
  })

  it('disables background color randomizing', () => {
    const wrapper = mount(RansomNote, {
      propsData: {
        text: 'hello',
        randomBackColor: false
      }
    })
    const styles = get_span_styles(wrapper, 'BackColor')
    
    expect(new Set(styles).size).toEqual(1)
  })

  it('disables text case randomizing', () => {
    const wrapper = mount(RansomNote, {
      propsData: {
        text: 'ooooooooooooooooooooooooooo',
        randomFontCase: false
      }
    })
    const styles = get_span_styles(wrapper, 'FontCase')
    
    expect(new Set(styles).size).toEqual(1)
  })
})
