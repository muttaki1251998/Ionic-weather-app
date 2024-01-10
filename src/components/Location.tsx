import React, { useEffect } from "react";
import { setLocation } from "./LocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const Location: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);
  // Running once when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      console.log("Geolocation not supported by browser");
    }
  }, []);

  const showPosition = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    dispatch(
      setLocation({
        latitude,
        longitude,
        address: null,
      })
    );
    fetchAddress(latitude, longitude);
  };

  const handleError = (error: GeolocationPositionError) => {
    console.error(error);
  };
  const fetchAddress = async (lat: number, lon: number) => {
    // Use IP-API or another geolocation API to fetch address
    try {
      const response = await fetch(
        `http://ip-api.com/json/?fields=61439&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      dispatch(setLocation({
        latitude: lat, 
        longitude: lon, 
        address: data.city
      }))
    } catch (error) {
      console.error("Error fetching address: ", error);
    }
  };

  return (
    <div>
      <p>{location.address}</p>
    </div>
  );
};

export default Location;
