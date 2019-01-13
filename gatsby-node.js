const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // const articleTemplate = path.resolve(`src/templates/articles/articles.js`);
  const articleTemplate = path.resolve(`src/templates/articles/articles.js`);
  const categoriesTemplate = path.resolve(
    `src/templates/categories/categories.js`
  );
  const pagesTemplate = path.resolve(`src/templates/pages/pages.js`);

  const articles = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(articles)/.*.md$/" } }
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, category } = node.frontmatter;
      createPage({
        path: `/${category}/${slug}`,
        component: articleTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
  });

  const categories = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(categories)/.*.md$/" } }
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, category } = node.frontmatter;
      createPage({
        path: `/${slug}`,
        component: categoriesTemplate,
        context: {
          // additional data can be passed via context
          category
        }
      });
    });
  });

  const pages = graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(pages)/" } }) {
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
        path: `/${slug}`,
        component: pagesTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
  });

  return Promise.all([articles, categories, pages]);
};
