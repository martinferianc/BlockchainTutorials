import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // Everywhere else we are using a method
    this.state = { term: "" };
  }

  render() {
      // The currly braces are for typing and encapsulating JXX
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    // The method basically informs React that the state changes
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
