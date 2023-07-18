import axios from "axios";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = (city, country) =>
  new Promise((resolve, reject) => {
    axios
      .get(API_URL, {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "en-US,en;q=0.9",
          Connection: "keep-alive",
          Host: "api.openweathermap.org",
          Origin: "http://api.openweathermap.org/data/2.5/weather",
          Referer: "http://api.openweathermap.org/data/2.5/weather",
        },
        params: {
          q: `${city},${country}`,
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error?.message);
      });
  });
