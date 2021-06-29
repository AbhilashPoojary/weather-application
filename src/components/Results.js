import React from "react";
import { WeatherIcons } from "./WeatherIcons";

export default function Results({ weather }) {
  console.log(weather);
  let isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      {weather ? (
        <div className='card'>
          <img
            className='card-img-top'
            src={WeatherIcons[weather?.weather[0].icon]}
            alt='icon'
          />
          <div className='card-body'>
            <p>{isDay ? "Day-time" : "Night-time"}</p>
            <p>Location: {`${weather?.name}, ${weather?.sys?.country}`}</p>
            <p>Description: {weather?.weather[0].description}</p>
            <p>Wind speed: {weather?.wind.speed}</p>
            <p>
              Timezone:{" "}
              {`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
            </p>
            <p>Humidity: {weather?.main.humidity}</p>
            <p>Pressure: {weather?.main.pressure}</p>

            <p>Temperature: {`${Math.floor(weather?.main?.temp - 273)}°C`}</p>
          </div>
        </div>
      ) : (
        <h3>
          Please search with the valied city name to get the weather details
        </h3>
      )}
    </>
  );
}
