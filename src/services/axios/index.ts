import axios from 'axios';

import { BASE_URL } from '../../configs/environment';

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Content-type': `application/json`
  }
})

export default instance
