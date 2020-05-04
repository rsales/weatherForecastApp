import axios from 'axios';
import { WEATHER_KEY } from 'react-native-dotenv'

const apiWeather = axios.create({
  baseURL: `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=Curitiba&days=7`
});

export default apiWeather;