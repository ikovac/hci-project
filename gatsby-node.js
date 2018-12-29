const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(`src/templates/articles.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/article/" + slug,
        component: articleTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
  });
};
