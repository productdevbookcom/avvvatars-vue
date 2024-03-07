import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AvvvatarsVue from '../src/components/Avvvatars.vue'

const value = 'Avvvatars'

describe('avvvatars Snapshots', () => {
  it('value', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displayValue', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        displayValue: value,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('value & displayValue', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        displayValue: 'test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('size', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        size: 50,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shape', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        variant: 'shape',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shadow & Border', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        shadow: true,
        border: true,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
