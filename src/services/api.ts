import client from "./axios"

export const signin = () => {
    return client.post('/signin')
}

// aqui estou criando um client na rota chamada 'sgnin' e dizendo que ela eh um post

// essa funcao eh a que vai ser chamada na minha pagina principal, que eh o formulario