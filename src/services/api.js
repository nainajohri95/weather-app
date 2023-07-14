import axios from "axios";

const API_KEY = "ce510c2cc0c5115a717cc33b520142e5";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    let { data } = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};
