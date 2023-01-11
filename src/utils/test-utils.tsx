import { cleanup, render, screen } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

const getByTextContent = (text: string) => {
  return screen.getByText((content, element) => {
    const hasText = (element: Element | null) => element?.textContent === text
    const elementHasText = hasText(element)
    const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child))
    return elementHasText && childrenDontHaveText
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
export { getByTextContent }