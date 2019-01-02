import React, { Component } from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { graphql, StaticQuery } from "gatsby";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0
    };
  }

  nextClick = length => {
    if (this.state.activeImage === length - 1) {
      this.setState({ activeImage: 0 });
    } else {
      this.setState({ activeImage: this.state.activeImage + 1 });
    }
  };

  prevClick = length => {
    if (this.state.activeImage === 0) {
      this.setState({ activeImage: length - 1 });
    } else {
      this.setState({ activeImage: this.state.activeImage - 1 });
    }
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query slideshowQuery {
            allFile(
              filter: {
                sourceInstanceName: { eq: "images" }
                relativeDirectory: { eq: "slideshow" }
              }
            ) {
              edges {
                node {
                  ... on File {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile: { edges: images } }) => {
          return (
            <div className={styles.SlideshowContainer}>
              <div className={styles.WelcomeText}>
                <h2>Dobrodošli na DiveIn webshop</h2>
              </div>
              <i
                className={cn("fas fa-angle-left", styles.IconLeft)}
                onClick={() => this.nextClick(images.length)}
              />
              <img
                src={
                  images[this.state.activeImage].node.childImageSharp.original.src
                }
                alt="slideshow"
              />
              <i
                className={cn("fas fa-angle-right", styles.IconRight)}
                onClick={() => this.prevClick(images.length)}
              />
            </div>
          );
        }}
      />
    );
  }
}

export default Slideshow;
