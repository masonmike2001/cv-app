import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        console.log(this.state);
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    const { name, email, phone } = this.state;
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
