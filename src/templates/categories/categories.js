import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ data, location }) => {
  const { markdownRemark: category } = data;
  return (
    <>
      <Link to={location.state ? location.state.prev : '/'}><i className="fas fa-arrow-left"></i></Link>
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
