import React from "react";
import cn from "classnames";
import { Link, StaticQuery, graphql } from "gatsby";
import styles from "./styles.module.css";

const Logo = ({ screenType }) => {
  return (
    <StaticQuery
      query={graphql`
      query logoQuery {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data => (
        <div className={cn(styles.LogoWrapper, styles[screenType])}>
          <Link to="/" exact="true">
            <img src={data.file.childImageSharp.fluid.src} alt="logo" />
          </Link>
        </div>
      )}
    />
  );
};

export default Logo;
