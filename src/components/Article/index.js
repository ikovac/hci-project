import React from "react";
import styles from "./styles.module.css";
import renderHtmlToReact from "../RenderHtmlToReact";
import { Link } from "gatsby";

const Article = ({node}) => {
  const { htmlAst, frontmatter, excerpt } = node;
  let figure = htmlAst.children.find(element => element.tagName === "figure");
  return (
    <div className={styles.Article}>
      <h3>
        <Link to={`/${frontmatter.category}/${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      </h3>
      <section className={styles.Picture}>{figure && renderHtmlToReact(figure)}</section>
      <h4>Cijena: {frontmatter.price} kn</h4>
      <p>{excerpt}</p>
    </div>
  );
};

export default Article;
