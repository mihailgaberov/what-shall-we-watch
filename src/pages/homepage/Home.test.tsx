import { describe, expect, it, vitest } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import Home from './Home'

describe('Home page', () => {
  it('should render CTA buttons', () => {
    const popularFn = vitest.fn()
    const luckyFn = vitest.fn()
    render(<Home popularCallback={popularFn} luckyCallback={luckyFn} />)
    expect(screen.getByText('Most Popular')).toBeDefined()
    expect(screen.getByText('Feeling Lucky')).toBeDefined()
  })

  it('should be able to click on the CTAs', () => {
    const popularFn = vitest.fn()
    const luckyFn = vitest.fn()
    render(<Home popularCallback={popularFn} luckyCallback={luckyFn} />)
    const btnMostPopular = screen.getByText('Most Popular')
    userEvent.click(btnMostPopular)
    expect(popularFn).toBeCalled()
    const btnLucky = screen.getByText('Feeling Lucky')
    userEvent.click(btnLucky)
    expect(luckyFn).toBeCalled()
  })
})