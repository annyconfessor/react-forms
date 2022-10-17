import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Forms from '..'

describe('Forms', () => {
  const DEFAULT_DATA = [
    {
      id: 1,
      field: 'Name',
      value: ''
    },
    {
      id: 2,
      field: 'Sobrenome',
      value: ''
    },
    {
      id: 3,
      field: 'Region',
      value: ''
    },
    {
      id: 4,
      field: 'Email',
      value: ''
    },
    {
      id: 5,
      field: 'Note',
      value: ''
    } 
  ]

  it("should render elements correctly.", () => {
    render(<Forms defaultData={DEFAULT_DATA} />)
    
    const name = screen.getByText('Name')
    const email = screen.getByText('Email')
    const lastName = screen.getByText('Sobrenome')
    const note = screen.getByText('Note')
    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const lastnameInput = screen.getByLabelText('Sobrenome')
    const noteInput = screen.getByLabelText('Note')

    expect(name).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(note).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(lastnameInput).toBeInTheDocument()
    expect(noteInput).toBeInTheDocument()
  })

  it("should change correctly the inputs values.", () => {
    render(<Forms defaultData={DEFAULT_DATA} />)

    function hasInputValue(e, inputValue) {
      return screen.getByDisplayValue(inputValue) === e
    }
    
    const nameInput = screen.getByLabelText('Name') 
    
    fireEvent.change(nameInput, { target: { value: 'User' } })

    // check if the user enter some input
    expect(hasInputValue(nameInput, 'User')).toBe(true)
  })

  it("should render button correctly", () => {
    render(<Forms defaultData={DEFAULT_DATA} />)

    screen.getByRole("button", { name: "Limpar"})
    screen.getByRole("button", { name: "Enviar" })
  })

  it("sould click on send button and calls handleModalOpen", () => {
    const handleModalOpen = jest.fn()

    render(<Forms defaultData={DEFAULT_DATA} />)

    const SendButton = screen.getByRole("button", { name: "Enviar" })

    fireEvent.click(SendButton)

    expect(handleModalOpen).toHaveBeenCalledTimes(1)
  })
})
