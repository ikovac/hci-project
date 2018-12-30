import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: category } = data;
  return (
    <>
      <h1>{category.frontmatter.naziv}</h1>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: category.html }}
      />
    </>
  );
};

export const query = graphql`
  query categoriesQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        naziv
      }
    }
  }
`;
