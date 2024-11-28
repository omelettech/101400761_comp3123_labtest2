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
        <div className="card shadow-xl bg-primary bg-opacity-50 m-10 p-5 w-full">
            <figure>
                <div className="card-title text-xl"><h2>{cityname}</h2></div>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={weather}
                /></figure>
            <div className="card-body w-full">
                <p className='text-2xl text-secondary-content'>Temperature: <div className={"badge bg-secondary text-2xl font-bold text-primary-content"}>{temp}°C</div></p>
                <p className='text-2xl text-secondary-content' >Weather: <div className="badge bg-accent text-primary-content">{weather}</div></p></div>


        </div>
    )
}