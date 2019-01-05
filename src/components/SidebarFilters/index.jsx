import React, { Component } from "react";
import Checkbox from "../Checkbox";

const Proizvodac = [
  { value: "divein", label: "Dive In" },
  { value: "bleutec", label: "Bleutec" },
  { value: "carbonia", label: "Carbonia" }
];

class SidebarFilters extends Component {
  constructor(props) {
    super(props);
    this.proizvodacCheckboxes = new Set();
    this.state = {price: ''}
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const {onFormSubmit} = this.props;
    onFormSubmit(this.proizvodacCheckboxes, this.state.price);
  };

  handleCheckboxChange = item => {
    if (this.proizvodacCheckboxes.has(item)) {
      this.proizvodacCheckboxes.delete(item);
    } else {
      this.proizvodacCheckboxes.add(item);
    }
  };

  onPriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          {Proizvodac.map(item => (
            <Checkbox
              item={item}
              key={item.value}
              handleCheckboxChange={this.handleCheckboxChange}
            />
          ))}
          <div>
            <label htmlFor="price">Cijena do </label>
            <input id="price" type="number" min="0" value={this.state.price} onChange={this.onPriceChange}/>
            <label> kn</label>
          </div>

          <button type="submit">Primjeni</button>
        </form>
      </>
    );
  }
}

export default SidebarFilters;
