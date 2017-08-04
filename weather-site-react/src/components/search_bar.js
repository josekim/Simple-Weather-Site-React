import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({term: event.target.value});
  }
  handleSubmit(event) {
     event.preventDefault();
     this.props.onSubmit(this.state.term)
     this.setState({term:""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="navbar-form navbar-left trythis">
        <div className="form-group">
          <input onChange={this.handleChange} type="text" value={this.state.term} className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default SearchBar;
