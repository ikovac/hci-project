import React, { Component } from "react";
import styles from "./styles.module.css";
import images from "./images";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      activeImage: 0
    };
  }

  nextClick = () => {
    if (this.state.activeImage == this.state.images.length - 1) {
      this.setState({ activeImage: 0 });
    } else {
      this.setState({ active: this.state.activeImage++ });
    }
  }

  prevClick = () => {
    if (this.state.activeImage == 0) {
      this.setState({ activeImage: this.state.images.length - 1 });
    } else {
      this.setState({ active: this.state.activeImage-- });
    }
  }

  render() {
    return (
      <div className={styles.SlideshowContainer}>
        <i className="fas fa-angle-left" onClick={this.nextClick} />
        <img
          src={"/images/" + this.state.images[this.state.activeImage]}
          alt="ss"
        />
        <i className="fas fa-angle-right" onClick={this.prevClick} />
      </div>
    );
  }
}

export default Slideshow;
