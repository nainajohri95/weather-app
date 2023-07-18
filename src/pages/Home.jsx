import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Sunset from "../assets/images/bg.jpg";
import Form from "../components/Form";
import Information from "../components/Information";
import { getWeather } from "../services/api";

const Home = () => {
  const [data, setData] = useState({ city: "" });
  const [result, setResult] = useState({});

  /* 
  here key "name" is a varialble therefore must be enclose inside []
  "...data"  is a spread operator to append the data 
 */
  const handleChange = ({ target: { name, value } = {} }) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    const { city } = data || {};

    getWeather(city)
      .then((response) => {
        setResult(response);
        toast.success("Successfully Fetched Info");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Grid
      container
      sx={{
        height: "100dvh",
        padding: "3rem 8rem",
        overflow: "hidden",
      }}
    >
      <Grid item xs={4} sx={{ height: "100%" }}>
        <Box
          sx={{
            backgroundImage: `url(${Sunset})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>

      <Grid item xs={8} sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", background: "#FF9933", overflow: "hidden" }}>
          <Form data={data} handleChange={handleChange} onSubmit={onSubmit} />
          <Information result={result} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
