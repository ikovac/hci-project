import React from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";

const Category = ({ naziv, path, image_name }) => {
  return (
    <div className={styles.CategoryCard}>
      <Link to={path}>
        <h3>{naziv}</h3>
        <div className={styles.ImageWrapper}>
          <img src={"/images/" + image_name} alt={naziv} />
        </div>
      </Link>
    </div>
  );
};

export default Category;
