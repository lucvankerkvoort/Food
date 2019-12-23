import React from "react";

class Searchbar extends React.Component {
  search = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="searchbar">
        <form>
          <input type="text" placeholder="Search..." name="search"></input>
          <button type="submit" onClick={this.search}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
