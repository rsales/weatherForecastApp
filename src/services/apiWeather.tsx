import axios from 'axios';

const apiWeather = axios.create({
  baseURL: 'http://api.weatherapi.com/v1'
});

export default apiWeather;