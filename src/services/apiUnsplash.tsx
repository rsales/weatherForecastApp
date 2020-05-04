import axios from 'axios';
import { UNSPLASH_KEY } from 'react-native-dotenv'

const apiUnsplash = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?query=london&client_id=${UNSPLASH_KEY}`
});

export default apiUnsplash;