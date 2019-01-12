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
      const user = JSON.parse(localStorage.getItem('user'));
    return (
      <>
      {user && <div>

          <button onClick={this.onLogOutClick}>Log out</button>

          <h1>Hello {user.name} {user.surname}</h1>
      </div>
    }
      </>
    );
  }
}

export default AdminPage;
