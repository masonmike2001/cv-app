import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    const name = this.props.name;
    const summary = this.props.summary;
    const email = this.props.email;
    const phone = this.props.phone;
    return (
      <fieldset>
        <legend>Profile:</legend>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={this.handleChange}
        />
        <label htmlFor="summary">Summary: </label>
        <textarea
          value={summary}
          id="summary"
          rows="8"
          cols="50"
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={this.handleChange}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          value={phone}
          id="phone"
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Profile;
