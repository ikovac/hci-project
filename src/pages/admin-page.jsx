import React, { Component } from "react";
import { navigate } from "gatsby";

class AdminPage extends Component {
  onLogOutClick = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <>
        {user && (
          <div>
            <h1>Dobrodošli {user.name} 🐬</h1>

            <button className="logout-btn" onClick={this.onLogOutClick}>
              Log out
            </button>
            <br />

            <div className="add-new-product-container">
              <section>
                <i class="fas fa-plus-circle" />
                <h3>Novi proizvod</h3>
              </section>
              <form>
                <input type="text" placeholder="Naziv" />
                <br />
                <input type="text" placeholder="Proizvođač" />
                <br />
                <input type="number" placeholder="Cijena" />
                <br />
                <textarea placeholder="Opis" rows="10" />
                <br />
                <button type="submit">Dodaj</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default AdminPage;
