import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
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
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
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

    return (
        <div className="app">
            <header className="app-header">
                <h1>Weather App</h1>
                <p>COMP3123 Lab Test 2 | Student ID: 123456789</p>
            </header>

            <main>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by city name"
                        value={search}
                        onChange={handleSearch}
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
