import React from "react";
import Category from "./Category";
import styles from "./styles.module.css";
import { StaticQuery, graphql } from "gatsby";

const Categories = ({location}) => (
  <StaticQuery
    query={graphql`
      query allcategoriesQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(categories)/.*.md$/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                slug
                naziv
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: categories } }) => (
      <>
        <h2>Kategorije</h2>
        <div className={styles.CategoryWrapper}>
          {categories.map(
            ({
              node: {
                html,
                frontmatter: { slug, naziv }
              }
            }) => (
              <Category
                path={`/${slug}`}
                naziv={naziv}
                html={html}
                key={slug}
                location={location}
              />
            )
          )}
        </div>
      </>
    )}
  />
);

export default Categories;
