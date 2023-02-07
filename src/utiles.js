
import axios from 'axios';

const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
  timeout: 15000,
  params: {
    apikey: "1a9d9cea"
  }
});

export {omdb};
