import React from "react";
import { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  background: "#445A6F",
  padding: "10px",
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: "20px",
  fontSize: "18px",
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

function Form({ setResult }) {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    //here key "e.target.name" is a varialble therefore must be enclose inside []
    // "...data"  is a spread operator to append the data
  };

  const getWeatherInfo = async () => {
    if (data.city.trim() === "" || data.country.trim() === "") {
      // City or country is empty, do not make the API call
      setResult({});
      return;
    }

    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />

      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />

      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
}

export default Form;

// by using variant='contained' colur will be filled to the Button
//The handleChange function is called whenever there is a change event in the form inputs, such as typing in the city or country input fields.
// It receives the event object and extracts the name and value of the input field from e.target.name and e.target.value, respectively.
// It uses the spread operator ({ ...data }) to create a copy of the existing data object, and then updates the corresponding field with the new value.
// Finally, it calls setData with the updated data object, triggering a re-render of the component with the updated form data.
