import axios from 'axios';

import { BASE_URL } from '../../configs/environment';

export const baseApi = axios.create({
  baseURL: `${BASE_URL}/v1`,
  timeout: 30000,
  headers: {
    'Content-type': `application/json`
  }
})

