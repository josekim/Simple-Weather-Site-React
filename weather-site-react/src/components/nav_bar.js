import React, { Component } from 'react';
import Searchbar from "./search_bar"

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">

                <li><a href="#">Home</a></li>
              </ul>
              <Searchbar onSubmit={this.props.onSubmit}/>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
