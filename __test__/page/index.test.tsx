import Home from '@pages/index'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('render title', () => {
    render(<Home />)

    const title = document.querySelector('h1')?.textContent

    expect(title).toEqual(undefined)
  })
})
