import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/current.json";

export const getWeather = (city, country) =>
  new Promise((resolve, reject) => {
    axios
      .get(API_URL, {
        headers: {
          Accept: "application/json",
        },
        params: {
          q: city,
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const { current = {}, location = {}, error = {} } = response?.data;

        if (error?.message) {
          throw new Error(error);
        }

        const data = {
          location: `${location?.name}, ${location?.region}`,
          temperature: `${current?.temp_c}°C`,
          humidity: current?.humidity,
          wind_kph: current?.wind_kph,
          cloud: current?.cloud,
        };
        resolve(data);
      })
      .catch((error) => {
        reject(error?.message);
      });
  });
