import React from "react";
import Form from "../Components/Form";
import BackgroundSlideshow from "react-background-slideshow";
import { background } from "../Images";

class Home extends React.Component {
  state = {
    email: null
  };

  handleForm = input => {
    const email = input.map(email => {
      return <form>{email}</form>;
    });
    this.handleChange();
    this.setState({ email: email });
  };

  handleChange = () => {
    const style = {
      borderRadius: "10px",
      height: "400px",
      width: "300px",
      margin: "50px",
      padding: "15px",
      overflowY: "scroll",
      background: "rgba(255,255,255,0.5)",
      boxShadow: "2px 2px 4px black"
    };
    this.setState({ style: style });
  };

  render() {
    return (
      <div className="home">
        <BackgroundSlideshow images={background} />
        <div className="search-section">
          <h3>Welcome to the Party Catering website</h3>
          <Form handleForm={this.handleForm} />
        </div>
        <div
          className="emailAddresses"
          style={this.state.style ? this.state.style : null}
        >
          {this.state.email}
        </div>
      </div>
    );
  }
}

export default Home;
