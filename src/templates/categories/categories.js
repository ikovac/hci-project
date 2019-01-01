import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ data, location }) => {
  // const { allMarkdownRemark: {edges: articles} } = data;
  console.log(data);
  return (
    <>
      <Link to={location.state ? location.state.prev : "/"}>
        <i className="fas fa-arrow-left" />
      </Link>
      {/* <h1>{category.frontmatter.naziv}</h1> */}
      {/* <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: category.html }}
      /> */}
      <h3>Sidebar</h3>
      {/* {articles && articles.map(article => <div key={article.node.frontmatter.slug}>{article.node.frontmatter.slug}</div>)} */}
    </>
  );
};

export const query = graphql`
  query allAcrticlesForCategoryQuery($category: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $category } }
        fileAbsolutePath: { regex: "/(articles)/.*.md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  }
`;
