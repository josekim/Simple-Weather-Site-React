import React, { Component } from 'react';
import NavBar from "./components/nav_bar"
import WeatherApi from 'openweather-apis'
import CityInfo from "./components/city_info"

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {term: "", info:[], history:[]};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.ApiRequest = this.ApiRequest.bind(this);
  }

  handleSubmit(term){
    let temp_history = this.state.history
    if (!temp_history.includes(term)){
    temp_history.push(term)
    this.setState({history:temp_history})
    this.ApiRequest(term);
    }
  }
  componentWillMount() {
    this.ApiRequest("Austin");
    this.setState({history:["Austin"]})
  }
  getJson(err, JSONObj){
    let tempInfo = this.state.info.slice()
    tempInfo.push(JSONObj)
    if(JSONObj.cod === 200){
      this.setState({info: tempInfo})
    }
  }
  ApiRequest(city) {
  WeatherApi.setLang('en')
  WeatherApi.setUnits('imperial')
  WeatherApi.setAPPID("5647c5373683e9870ae6a589c3ad3e27")
  WeatherApi.setCity(city)
  WeatherApi.getAllWeather(this.getJson.bind(this));
}
  render() {
    let cityInfo = this.state.info;
    return (
      <div className="App">
        <NavBar onSubmit={this.handleSubmit} />
        <div className="container">
        {cityInfo.map((info) =>{ return <CityInfo info={info} key={info.name} /> })}
        </div>
      </div>
    );
  }
}

export default App;
