import React, { Component } from "react";
import user from "../config/user";
import cn from "classnames";
import { navigate } from "gatsby";

class Prijava extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: undefined
    };
  }

  onSubmitClick = event => {
    event.preventDefault();
    const {username, password} = this.state;
    if(username === user.username && password === user.password) {
        this.setState({ errorMsg: false });
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/admin-page');
    } else {
        this.setState({ errorMsg: true });
    }
  };

  onUserChange = event => {
    this.setState({ username: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    const { username, password, errorMsg } = this.state;
    const submitClasses = cn({
        red: !(username && password) ? true : false,
        green: (username && password) ? true : false
    });
    return (
      <div className="login-form-container">
        <h1>Prijava</h1>
        {errorMsg && <div className="error-div">
            <p>Not valid user data</p>
        </div>}
        <form id="login-form">
          <div>
            <input
              type="text"
              value={username}
              onChange={this.onUserChange}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={this.onPasswordChange}
              value={password}
              placeholder="Password"
            />
          </div>
          <button
            onClick={this.onSubmitClick}
            disabled={!(username && password)}
            type="submit"
            className={submitClasses}
          >
            {!username && <p>Username is required</p>}
            {username && !password && <p>Password is required</p>}
            {username && password && <p>Prijava</p>}
          </button>
        </form>
      </div>
    );
  }
}

export default Prijava;
