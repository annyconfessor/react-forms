import { AxiosResponse, AxiosError, AxiosInstance } from 'axios';

const onResponse = (response: AxiosResponse) => response;
const onError = async (error: AxiosError) => {
  const status = error.response?.status ?? 0;

  if (status == 404) {
    return `Pagina nao encontrada`
  }
    
    return  Promise.reject(error)
}

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(onResponse, onError);
}