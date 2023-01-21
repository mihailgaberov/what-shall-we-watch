import { describe, expect, it, vitest } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import Footer from './Footer'

describe('Footer', () => {
  it('should provide navigation buttons in the list view', () => {
    const nextFn = vitest.fn()
    const prevFn = vitest.fn()
    render(<Footer prevCallback={prevFn} nextCallback={nextFn} isPrevButtonDisabled={false} />)
    userEvent.click(screen.getByText('Next'))
    expect(nextFn).toHaveBeenCalled()
    userEvent.click(screen.getByText('Prev'))
    expect(prevFn).toHaveBeenCalled()
  })

  it('should be able to disable the Prev button', () => {
    const prevFn = vitest.fn()
    const nextFn = vitest.fn()
    render(<Footer prevCallback={prevFn} nextCallback={nextFn} isPrevButtonDisabled={true} />)
    userEvent.click(screen.getByText('Prev'))
    expect(prevFn).not.toHaveBeenCalled()
  })
})