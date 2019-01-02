import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import ArticleList from "../../components/ArticleList";

const CategoryPage = ({ data, location }) => {
  let articles = data.allMarkdownRemark ? data.allMarkdownRemark.edges : [];
  return (
    <>
      <section className={styles.CategoryHeader}>
        <Link to={location.state ? location.state.prev : "/"}>
          <i className="fas fa-arrow-left" />
        </Link>
        <h1>
          {data.markdownRemark.frontmatter.naziv}
        </h1>
      </section>

      <section className={styles.MainWrapper}>
        <div className={styles.ArticleList}>
          <ArticleList articles={articles} />
        </div>
      </section>
    </>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
    markdownRemark: PropTypes.object.isRequired
  })
};

export default CategoryPage;

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
          id
          htmlAst
          excerpt(pruneLength: 200)
          frontmatter {
            slug
            title
            price
            category
          }
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $category } }) {
      frontmatter {
        naziv
      }
    }
  }
`;
