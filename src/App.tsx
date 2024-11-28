import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
import {WeatherCard} from "./components/WeatherCard";
const CITY_LIST = [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Ottawa',
    'Edmonton',
    'Quebec',
    'Winnipeg',
    'Hamilton',
    'Kitchener',
];
const App = () => {
    const [city, setCity] = useState([]);

    const [filteredCities, setFilteredCities] = useState([]);
    const [search, setSearch] = useState("")
    const API_KEY = "b57ac398a5b10cb60d91d476724fdbaa"; // Replace with your OpenWeatherMap API Key

    useEffect(() => {
        const fetchCityWeather = async () => {
            try {
                const cityWeatherPromises = CITY_LIST.map((city) =>
                    axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                    )
                );

                const responses = await Promise.all(cityWeatherPromises);
                const cityData:any = responses.map((response) => response.data);

                if (cityData){
                    setCity(cityData);
                    setFilteredCities(cityData);
                }

            } catch (error) {
                console.error('Error fetching weather data for cities:', error);
            }
        };
        fetchCityWeather();
    }, [API_KEY]);

    const handleSearch = (even:any) => {
        const searchText = even.target.value.toLowerCase();
        setSearch(searchText);
        const filtered = city.filter((c:any) =>
            c.name.toLowerCase().includes(searchText)
        );
        setFilteredCities(filtered);
    };
    const switchTheme = ()=> {
        console.log(document.documentElement.getAttribute('data-theme'))
        document.documentElement.getAttribute('data-theme') === "cyberpunk" ?
            document.documentElement.setAttribute("data-theme", 'halloween')
    :
        document.documentElement.setAttribute("data-theme", 'cyberpunk');

    }

    return (
        <div className="app  flex justify-center items-center w-full">



            <main >
                <div>Switch theme</div>
                <input type="checkbox" value="cyberpunk" className="toggle theme-controller" />

                <header className="p-10 bg-secondary m-8 content-center text-primary-content font-bold text-2xl w-full">
                    <h1>Weather App</h1>
                    <p>COMP3123 Lab Test 2 | Student ID: 123456789</p>

                </header>
                <div className="w-full">
                    <input

                        type="text"
                        placeholder="Search by city name"
                        value={search}
                        onChange={handleSearch}
                        className="w-full"
                    />
                </div>
                <div className="city-list">
                    {filteredCities.length > 0 ? (
                        filteredCities.map((city:any, index:number) => (
                            <WeatherCard
                                cityname={city.name}
                                temp={city.main.temp}
                                weather={city.weather[0].description}
                                icon={city.weather[0].icon}
                                />
                            // <div key={index} className="city-card">
                            //
                            // </div>
                        ))
                    ) : (
                        <p>No cities found. Please adjust your search.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
