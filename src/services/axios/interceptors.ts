import { AxiosResponse, AxiosError, AxiosInstance } from 'axios';

const onResponse = (response: AxiosResponse) => response;
const onError = async (error: AxiosError) => {
  const status = error.response?.status ?? 0; // essa linha eh para prevenir que venha undefined

  if (status == 404) {
    return `Pagina nao encontrada`
  }
    
    return  Promise.reject(error)
}

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(onResponse, onError);
}

// os interceptadores sao usados antes que uma request ou response ocorra. Nesse caso, ele est sendo usado para tratar erros.
