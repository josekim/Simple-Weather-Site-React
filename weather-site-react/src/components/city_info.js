import React, { Component } from 'react';

class CityInfo extends Component {


  render() {
    let weather = this.props.info.main
    let cityName = this.props.info.name
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1> {cityName} </h1>
      <h2> the Temperature today is {weather.temp}</h2>
      <h2> the High is {weather.temp_max}</h2>
      <h2> the low is {weather.temp_min}</h2>
      </div>
    );
  }
}

export default CityInfo;
