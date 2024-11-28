import React from "react";


interface WeatherCardProps {
    cityname: string
    temp: number
    weather: string
    icon: any

}

export const WeatherCard = ({cityname, temp, weather, icon}: WeatherCardProps) => {
    return (
        // <div className=" card flex align-middle justify-center items-center p-10 m-10">
        <div className="card w-96 shadow-xl bg-primary bg-opacity-50 m-10 p-5">
            <figure>
                <div className="card-title"><h2>{cityname}</h2></div>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={weather}
                /></figure>
            <div className="card-body">
                <p>Temperature: <div className={"badge bg-secondary"}>{temp}°C</div></p>
                <p>Weather: <div className="badge bg-accent text-primary-content">{weather}</div></p></div>


        </div>
    )
}