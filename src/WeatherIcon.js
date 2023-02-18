import React from "react";

export default function WeatherIcon(props) {
  let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`;
  return icon;
}
