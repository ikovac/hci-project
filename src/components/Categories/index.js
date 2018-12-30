import React from "react";
import Category from "./Category";
import styles from "./styles.module.css";

const Categories = () => {
  return (
    <>
      <h2>Kategorije</h2>
      <div className={styles.CategoryWrapper}>
        <Category path="/puske" naziv="Puške" image_name="speargun.jpeg" />
        <Category path="/odijela" naziv="Odijela" image_name="wetsuit.jpeg" />
        <Category path="/peraje" naziv="Peraje" image_name="peraje.jpg" />
        <Category path="/maske" naziv="Maske" image_name="maske.jpg" />
      </div>
    </>
  );
};

export default Categories;
