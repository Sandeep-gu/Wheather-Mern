import React, { useEffect, useState } from "react";
import "./Wheather.css";
function Wheather() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const apiKey = "ab441fde49ef3ffa32334c6951fb118b";

  const getWeatherData = async (cityName) => {
    if (!cityName) {
      cityName = "mumbai";
    }
    const weatherURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    console.log(weatherURL);

    try {
      const response = await fetch(weatherURL);
      console.log(response);
      const jsonData = await response.json();

      console.log("response:", jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    getWeatherData(search);
  }, []);

  const onChangeState = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitbtn = (e) => {
    getWeatherData(search);
  };
  return (
    <div>
      <div className="col-md-12">
        <div className="Wheatherbackground">
          <h1 className="heading">Wheather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={onChangeState}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmitbtn}
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-md-12 mt-5">
          <div className="shadow rounded wheatherResultBox p-2">
            <img
              className="wheatherIcon"
              alt="..."
              src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
            />
            <h5 className="wheatherCity">{data.name}</h5>
            <h6 className="wheatherTemp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-3 shadow-sm ">
                  <h5>feels_like</h5>
                  <h6>{(data?.main?.feels_like - 273.15).toFixed(2)}°C</h6>
                </div>

                <div className="col-md-3 shadow-sm">
                  <h5>Temp_max</h5>
                  <h6>{(data?.main?.temp_max - 273.15).toFixed(2)}°C</h6>
                </div>

                <div className="col-md-3 shadow-sm">
                  <h5>Temp_min</h5>
                  <h6>{(data?.main?.temp_min - 273.15).toFixed(2)}°C</h6>
                </div>
                <div className="col-md-3 shadow-sm">
                  <h5>Pressure</h5>
                  <h6>{data?.main?.pressure}hPa</h6>
                </div>
              </div>
            </div>
            <div className="container">
                <h3 className="m-2">Wind</h3>
                <div className="row">
                    <div className="col-4 shadow-sm">
                        <h6>Speed</h6>
                        <h5>{data?.wind?.speed}Km/h</h5>
                    </div>

                    <div className="col-4 shadow-sm">
                        <h6>deg</h6>
                        <h5>{data?.wind?.deg}</h5>
                    </div>
                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheather;
