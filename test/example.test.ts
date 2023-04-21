import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Button } from '@root/index'

const slotText = 'Test content'

describe('button', () => {
  test('alert render', () => {
    const wrapper = mount(Button, {
      slots: {
        default: slotText,
      },
    })

    expect(wrapper.text()).toBe(slotText)
  })

  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
