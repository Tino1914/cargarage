import React, { Component } from "react";
import AuthService from "../../services/auth-service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p class="p-3 mb-2 bg-secondary text-white">
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p class="p-3 mb-2 bg-secondary text-white">
          <strong >Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p class="p-3 mb-2 bg-secondary text-white">
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <br />
        <strong class="p-3 mb-2 bg-secondary text-white">Authorities:</strong>
        <ul class="p-3 mb-2 bg-secondary text-white">
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}