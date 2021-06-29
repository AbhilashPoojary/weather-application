import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Input from "./components/Input";
import Results from "./components/Results";
import Axios from "axios";

function App() {
  const [keyword, setKeyword] = useState({
    text: "udupi",
  });

  const [weather, updateWeather] = useState();

  const handleChange = (e) => {
    setKeyword({
      text: e.target.value,
    });
  };
  const checkResults = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyword.text}&appid=c43ac0ea7c06e811e4e7594d0b422c62`
    ).catch((error) => {
      return error;
    });
    updateWeather(response.data);
  };
  return (
    <div className='App'>
      <div className='container'>
        <Input
          checkResults={checkResults}
          keyword={keyword}
          handleChange={handleChange}
        />
        <Results weather={weather} />
      </div>
    </div>
  );
}

export default App;
