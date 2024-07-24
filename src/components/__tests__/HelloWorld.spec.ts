import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MSATitle from '@/views/home-page/MSATitle.vue'

describe('MY SMART APP', () => {
  it('renders properly', () => {
    const wrapper = mount(MSATitle, { props: { msg: 'MY SMART APP' } })
    expect(wrapper.text()).toContain('MY SMART APP')
  })
})
