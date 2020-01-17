import React from "react"; 
import Rubriker from "./components/Rubriker"; 
import Form from "./components/Form"; 
import Vader from "./components/Vader"; 

const API_KEY = "4bf22668c40392c72e5bade2b1b515a7"; 

class App extends React.Component {
  state = {
    temperature: undefined, 
    city: undefined, 
    country: undefined, 
    humidity: undefined, 
    wind: undefined, 
    description: undefined, 
    error: undefined
  }
  getVader = async (e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json(); 
    if (city && country) {
    console.log(data); 
    this.setState({
        temperature: data.main.temp,
        city: data.name, 
        country: data.sys.country, 
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description, 
        error: ""
    }); 
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined, 
      wind: undefined, 
      description: undefined, 
      error: "Opps! Skriv in stad och land på engelska!"
    });
  }
}
  render() {
    return (
      <div>
        <div className="wrapper"> 
          <div className="main">
            <div className="containerBox">
              <div className="titleNamn">
              <Rubriker />
              </div>
               <div className="form">
                  <Form getVader = {this.getVader}/>
                  <Vader 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  description={this.state.description}
                  error={this.state.error}
                  /> 
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App; 