import axios from 'axios';

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Content-type': `application/json`
  }
})

export default instance


// axios eh uma biblioteca HTTP que permite fazemos solicitacoes a determinado endpoint.

// ao fazer essas solicitacoes, cria-se instancias. Instancias sao pedidos que ocorrem de maneira recorrente.

// nesse caso, eu nao estou usando o create() para criar uma baseURL, apenas passando um timeout e um headers. Mas, geralmente usamos 
// o create para criar uma instancia com uma baseURL por ser algo recorrente, para nao precisar ficar chamando o endpoint
// todas as vezes que precisarmos fazer uma requisicao.