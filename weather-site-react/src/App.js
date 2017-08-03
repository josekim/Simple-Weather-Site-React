import React, { Component } from 'react';
import NavBar from "./components/nav_bar"


class App extends Component {
  constructor(props) {
  super(props);
    this.state = {term: ""};
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(term){
    this.setState({term:term})
  }

  render() {
    return (
      <div className="App">
        <NavBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
