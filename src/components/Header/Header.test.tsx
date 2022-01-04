import { describe, expect, it, vitest } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import Header from './Header'

describe('Header', () => {
  it('should render clickable text', () => {
    const callbackFn = vitest.fn()
    render(<Header onClickCallback={callbackFn} />)
    const textElement = screen.getByText('Ко Да Глеам!?')
    expect(textElement).toBeDefined()
    userEvent.click(textElement)
    expect(callbackFn).toBeCalled()
  })
})