import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import AvvvatarsVue from '../src/components/Avvvatars.vue'

const value = 'Avvvatars'

describe('Avvvatars Snapshots', () => {
  test('value', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('displayValue', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        displayValue: value,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Value & displayValue', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        displayValue: 'test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Size', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        size: 50,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Shape', () => {
    const wrapper = mount(AvvvatarsVue, {
      props: {
        value,
        variant: 'shape',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Shadow & Border', () => {
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
