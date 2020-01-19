import React from "react";

class EmailForm extends React.Component {
  render() {
    return (
      <div class="form-group">
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Email Address"
        />
      </div>
    );
  }
}

export default EmailForm;
