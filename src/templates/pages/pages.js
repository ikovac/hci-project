import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <>
      <h1>{page.frontmatter.title}</h1>
      <section
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
