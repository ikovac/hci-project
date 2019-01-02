import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: article } = data;
  return (
    <>
      <h1>{article.frontmatter.title}</h1>
      <h3>Cijena: {article.frontmatter.price}kn</h3>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </>
  );
};

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        price
      }
    }
  }
`;
