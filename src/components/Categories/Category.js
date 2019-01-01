import React from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";

const Category = ({ naziv, path, html, location }) => {
  return (
    <div className={styles.CategoryCard}>
      <Link
        to={path}
        state={{
          prev: location.pathname
        }}
      >
        <h3>{naziv}</h3>
        <div
          className={styles.ImageWrapper}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Link>
    </div>
  );
};

export default Category;
