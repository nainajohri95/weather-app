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
  alignItems: "center",
  color: "white",
  padding: "10px",
  fontSize: "20px",
  letterSpacing: "2px",
  "& > svg": {
    marginRight: "10px",
  },
});

const Message = styled(Typography)({
  color: "red",
  margin: "50px",
  padding: "20px",
});

function Information({ result }) {
  console.log(">>> result", result);
  return result && Object.keys(result)?.length > 0 ? (
    <Box style={{ margin: "30px 60px" }}>
      <Row>
        <LocationOn />
        Location:{result?.name}, {result?.sys?.country}
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
    <Message>Please enter the values to check Weather</Message>
  );
}

export default Information;
