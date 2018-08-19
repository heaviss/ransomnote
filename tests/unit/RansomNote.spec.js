import { mount } from '@vue/test-utils'
import RansomNote from '@/components/RansomNote.vue'

function get_span_styles(wrapper, property) {
  const s = wrapper.findAll('span').wrappers.slice(1)

  return s.map(function(w) {return w.element.style[property]})
}

describe('RansomNote', () => {
  const wrapper = mount(RansomNote, {
    propsData: {
      text: 'ooooooooooooooooooooooooooo'
    }
  })

  it('renders the correct markup', () => {
    wrapper.setProps({ text: 'hi !' })
    expect(wrapper.html()).toContain('<span>h</span><span>i</span> <span>!</span>')
    wrapper.setProps({ text: 'ooooooooooooooooooooooooooo' })
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
    const styles = get_span_styles(wrapper, 'FontCase')

    expect(new Set(styles).size).toEqual(2)
  })

  it('randomizes margins', () => {
    const styles = get_span_styles(wrapper, 'Margins')
    expect(new Set(styles).size).toBeGreaterThan(1)
  })

  it('randomizes paddings', () => {
    const styles = get_span_styles(wrapper, 'Paddings')
    
    expect(new Set(styles).size).toBeGreaterThan(1)
  })
})

describe('RansomNote with disabled options', () => {
  const wrapper = mount(RansomNote, {
    propsData: {
      text: 'hello',
      randomFontColor: false,
      randomBackColor: false,
      randomFontCase: false,
      randomMargins: false,
      randomPaddings: false,
    }
  })
  it('disables font color randomizing', () => {
    const styles = get_span_styles(wrapper, 'FontColor')
    
    expect(new Set(styles).size).toEqual(1)
  })

  it('disables background color randomizing', () => {
    const styles = get_span_styles(wrapper, 'BackColor')
    
    expect(new Set(styles).size).toEqual(1)
  })

  it('disables text case randomizing', () => {
    const styles = get_span_styles(wrapper, 'FontCase')
    
    expect(new Set(styles).size).toEqual(1)
  })

  it('disables margin randomizing', () => {
    const styles = get_span_styles(wrapper, 'Margins')

    expect(new Set(styles).size).toEqual(1)
  })
  it('disables padding randomizing', () => {
    const styles = get_span_styles(wrapper, 'Paddings')

    expect(new Set(styles).size).toEqual(1)
  })
})
