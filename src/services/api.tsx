import axios from 'axios';
import { UNSPLASH_KEY, WEATHER_KEY } from 'react-native-dotenv'

const apiUnsplash = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?query=london&client_id=${UNSPLASH_KEY}`
});

const apiWeather = axios.create({
  baseURL: `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=Curitiba&days=7`
});