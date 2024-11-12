import axios from 'axios';

const ergastApi = axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

export default ergastApi;
