import { rest } from 'msw'

export const handlers = [
  rest.post('/signin', (req, res, ctx) => {

    return res(
      ctx.status(201),
      ctx.json({
        id: 1,
        name: 'Anny',
        lastName: 'Confessor',
        email: 'anny.confessor@gmail.com'
      })
    )
  })
]