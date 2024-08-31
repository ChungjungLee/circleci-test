import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a page', () => {
    render(<Page />)
 
    const button = screen.getByRole('button',{ name:'Click here' });
    const text = screen.getByRole('paragraph');

    expect(text).toHaveTextContent('Initial text');

    fireEvent.click(button);

    expect(text).toHaveTextContent('Button clicked');
  })
})