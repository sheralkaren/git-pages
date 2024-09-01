import axios from "axios";

const api = axios.create({
    baseURL: `http://api.weatherapi.com/v1`,
    // baseURL: `https://jsonplaceholder.typicode.com`,
})

const getWeatherData = () => api.get(`/current.json?key=720558cc28e34b98bd095429242807&q=Berlin&aqi=no`);
// const getWeatherData = () => api.get(`/posts`);

export {getWeatherData};