import React, { Component } from "react";
import { navigate } from "gatsby";

class AdminPage extends Component {
  onLogOutClick = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      navigate('/');
    }
  };
  render() {
    return (
      <>
        <button onClick={this.onLogOutClick}>Log out</button>
      </>
    );
  }
}

export default AdminPage;
