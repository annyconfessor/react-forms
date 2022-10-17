import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Forms from '..'

it("Text must be in the document", () => {

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
  
  render(<Forms defaultData={DEFAULT_DATA} />)
  
  const name = screen.getByText('Name')
  const email = screen.getByText('Email')
  const lastName = screen.getByText('Sobrenome')
  const note = screen.getByText('Note')

  expect(name).toBeInTheDocument()
  expect(lastName).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(note).toBeInTheDocument()

  // digitar qualquer nesse campo

  // checar se foi digitado corretamente qualquer coisa

  // e no final, clicar no botão de enviar e checar se a função handleModalOpen foi executada
  
})