import axios from 'axios';

const apiUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com/search'
});

export default apiUnsplash;