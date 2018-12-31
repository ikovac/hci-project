import React, { Component } from "react";
import styles from "./styles.module.css";
import images from "./images";
import cn from "classnames";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      activeImage: 0
    };
  }

  nextClick = () => {
    if (this.state.activeImage === this.state.images.length - 1) {
      this.setState({ activeImage: 0 });
    } else {
      this.setState({ activeImage: this.state.activeImage + 1 });
    }
  };

  prevClick = () => {
    if (this.state.activeImage === 0) {
      this.setState({ activeImage: this.state.images.length - 1 });
    } else {
      this.setState({ activeImage: this.state.activeImage - 1 });
    }
  };

  render() {
    return (
      <div className={styles.SlideshowContainer}>
        <div className={styles.WelcomeText}>
          <h2>Dobrodošli na DiveIn webshop</h2>
        </div>
        <i
          className={cn("fas fa-angle-left", styles.IconLeft)}
          onClick={this.nextClick}
        />
        <img
          src={"/images/" + this.state.images[this.state.activeImage]}
          alt="ss"
        />
        <i
          className={cn("fas fa-angle-right", styles.IconRight)}
          onClick={this.prevClick}
        />
      </div>
    );
  }
}

export default Slideshow;
