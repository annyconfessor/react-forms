import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Forms from '..'

it("Text must be in the document", () => {
  render(<Forms />)
  expect(screen.getByText("React-forms")).toBeInTheDocument()
})