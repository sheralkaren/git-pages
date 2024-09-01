import React, { useState, useEffect } from "react";
import { getWeatherData } from "../services/getWeatherData";


function Display(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("Loading data!")
        getWeatherData().then((res) => {
            console.log(res);
            console.log(typeof(res));
            setData(res.data);
            
        })
        .catch(error => console.log(error));
    }, [])

    console.log(data);
    console.log(typeof(data));


    // const { location: { region }, current: { humidity, temp_c } } = data;

    return (
        <div className="weather-display">
            <h1>Weather in {data.location.region}</h1>
            <p>Temperature: {data.current.temp_c}°C</p>
            <p>Humidity: {data.current.humidity}%</p>
        </div>);
}

export default Display;
