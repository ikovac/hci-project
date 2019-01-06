import React, { Component } from "react";
import { graphql } from "gatsby";
import Fuse from "fuse.js";
import ArticleList from "../components/ArticleList";

class Search extends Component {
  state = { search: "" };

  constructor(props) {
    super(props);

    const {
      allMarkdownRemark: { edges: articles }
    } = this.props.data;

    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["node.excerpt", "node.frontmatter.title"]
    };

    this.fuse = new Fuse(articles, options);
  }

  onChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { search } = this.state;

    let searchResults = this.props.data.allMarkdownRemark.edges;

    if (search.length) {
      searchResults = this.fuse.search(search);
    }

    return (
      <>
        <div className="search-input">
          <i className="fas fa-search" />
          <input
            type="search"
            placeholder="Upišite pojam"
            value={this.state.search}
            onChange={this.onChange}
          />
        </div>
        <div className="article-wrapper">
          <ArticleList articles={searchResults} />
        </div>
      </>
    );
  }
}

export default Search;

export const query = graphql`
  query SearchPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(articles)/.*.md$/" } }
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
  }
`;
