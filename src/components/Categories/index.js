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
              frontmatter {
                slug
                naziv
                image_name
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
                frontmatter: { slug, naziv, image_name }
              }
            }) => (
              <Category
                path={`/${slug}`}
                naziv={naziv}
                image_name={image_name}
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
