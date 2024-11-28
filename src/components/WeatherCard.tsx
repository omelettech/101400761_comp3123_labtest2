import React from "react";


interface WeatherCardProps {
    cityname: string
    temp: number
    weather: string
    icon: any

}

export const WeatherCard = ({cityname, temp, weather, icon}: WeatherCardProps) => {
    return (
        <>
            //icon
            <h2>{cityname}</h2>
            <p>Temperature: {temp}°C</p>
            <p>Weather: {weather}</p>
            <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={weather}
            />

        </>
    )
}