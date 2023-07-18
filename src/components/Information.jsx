import { Box, Typography, styled } from "@mui/material";
import {
  Brightness5,
  Brightness6,
  Cloud,
  Dehaze,
  LocationOn,
  Opacity,
  SettingsBrightness,
} from "@mui/icons-material";
import React from "react";

const Row = styled(Typography)({
  display: "flex",
  alignItems: "center",
  color: "white",
  "& > svg": {
    marginRight: "10px",
  },
});

const Information = ({ result }) => {
  return result && Object.keys(result)?.length > 0 ? (
    <Box
      sx={{
        height: "25rem",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Row>
        <LocationOn />
        Location: {result?.name}, {result?.sys?.country}
      </Row>

      <Row>
        <SettingsBrightness />
        Temperature: {result?.main?.temp}
      </Row>

      <Row>
        <Opacity />
        Humidity: {result?.main?.humidity}
      </Row>

      <Row>
        <Brightness5 />
        Sun Rise: {new Date(result?.sys?.sunrise * 1000).toLocaleTimeString()}
      </Row>

      <Row>
        <Brightness6 />
        Sun Set: {new Date(result?.sys?.sunset * 1000).toLocaleTimeString()}
      </Row>

      <Row>
        <Dehaze />
        Humidity: {result?.weather?.[0]?.main}
      </Row>

      <Row>
        <Cloud />
        Clouds: {result?.clouds?.all}%
      </Row>
    </Box>
  ) : (
    <Box sx={{ display: "grid", placeItems: "center", height: "25rem" }}>
      <Typography align="center" color="red">
        Please enter the values to check Weather
      </Typography>
    </Box>
  );
};

export default Information;
