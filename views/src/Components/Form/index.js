import React from "react";
import EmailForm from "../EmailForm";

class Form extends React.Component {
  state = {
    range: 1
  };
  renderEmail = e => {
    e.preventDefault();
    const range = this.state.range;
    let arr = [];
    for (let i = 0; i < range; i++) {
      arr.push(<EmailForm />);
    }

    this.props.handleForm(arr);
  };
  handleChange = e => {
    this.setState({ range: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label HTMLfor="formControlRange">
              How many people will be attending your party
            </label>
            <input
              type="range"
              min="1"
              max="100"
              defaultValue="1"
              className="custom-range"
              id="formControlRange"
              onChange={this.handleChange}
            />
            <p>{this.state.range}</p>
          </div>
          <button type="submit" onClick={this.renderEmail}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
