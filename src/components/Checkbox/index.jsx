import React, { Component } from "react";
import styles from "./styles.module.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, item } = this.props;
    this.setState({ isChecked: !this.state.isChecked });
    handleCheckboxChange(item);
  };

  render() {
    const { item } = this.props;
    const { isChecked } = this.state;
    return (
      <div className={styles.Checkbox}>
        <label className={styles.CheckboxLabel}>
          <input
            type="checkbox"
            value={item.value}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            className={styles.CheckboxInput}
          />
          {item.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
