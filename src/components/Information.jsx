import {
  Cloud,
  Dehaze,
  LocationOn,
  Opacity,
  SettingsBrightness,
} from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
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
        Location: {result?.location}
      </Row>

      <Row>
        <SettingsBrightness />
        Temperature: {result?.temperature}
      </Row>

      <Row>
        <Opacity />
        Humidity: {result?.humidity}%
      </Row>

      <Row>
        <Dehaze />
        Wind: {result?.wind_kph} km/h
      </Row>

      <Row>
        <Cloud />
        Clouds: {result?.cloud}%
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
