import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.teste.appit.com.br',
});

export const PATH = {
  login: {
    url: 'login',
  },
  categories: {
    url: 'categories',
  },
  products: {
    url: 'products',
  },
};
