import axios from "axios";

const API_KEY = "ce510c2cc0c5115a717cc33b520142e5";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = (city, country) =>
  new Promise((resolve, reject) => {
    axios
      .get(API_URL, {
        headers: {
          Accept: "application/json",
        },
        params: {
          q: `${city},${country}`,
          appid: API_KEY,
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
