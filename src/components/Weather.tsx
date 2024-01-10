import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../store";

const Weather: React.FC = () => {
  const location = useSelector((state: RootState) => state.location);
  const API = "CZMS36HQ4BPWNZBQZSZPZ4NFF";
  useEffect(() => {
		console.log(location);
		if (location.latitude && location.longitude && location.address) {
    fetchWeatherData(formatDate(new Date()));
  }
  }, [location]);

  const formatDate = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns month from 0-11
    const day = date.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const fetchWeatherData = async (date: any) => {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.address}/${date}?key=${API}`
    );
		console.log(response);
  };
  return <div>Weather;</div>;
};

export default Weather;