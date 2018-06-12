import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://burger-builder-70aed.firebaseio.com/'
});

export default axiosInstance;