import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import ArticleList from "../../components/ArticleList";
import SidebarFilters from "../../components/SidebarFilters";
import cn from "classnames";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.data.allMarkdownRemark
        ? this.props.data.allMarkdownRemark.edges
        : [],
      filterArticles: this.props.data.allMarkdownRemark
        ? this.props.data.allMarkdownRemark.edges
        : [],
      sidebar: false
    };
  }
  onFormSubmit = (proizvodac, cijena) => {
    let proizvodacValues = [];
    for (let item of proizvodac) {
      proizvodacValues.push(item.value);
    }
    if (proizvodacValues.length === 0 && cijena === "") {
      this.setState({ filterArticles: this.state.articles });
    } else {
      let filterArticles = [];
      if (cijena === "") {
        filterArticles = this.state.articles.filter(article => {
          const {
            node: { frontmatter }
          } = article;
          return proizvodacValues.includes(frontmatter.proizvodac);
        });
      } else if (proizvodacValues.length === 0) {
        let cijenaNo = Number(cijena);
        filterArticles = this.state.articles.filter(article => {
          const {
            node: { frontmatter }
          } = article;
          return frontmatter.price <= cijenaNo;
        });
      } else {
        let cijenaNo = Number(cijena);
        filterArticles = this.state.articles.filter(article => {
          const {
            node: { frontmatter }
          } = article;
          return (
            proizvodacValues.includes(frontmatter.proizvodac) &&
            frontmatter.price <= cijenaNo
          );
        });
      }
      this.setState({ filterArticles: filterArticles, sidebar: false });
    }
  };

  onSidebarModalClick = () => {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    const { location } = this.props;
    const { filterArticles: articles, sidebar } = this.state;
    const sidebarClasses = cn(
      styles.Sidebar,
      sidebar ? styles.open : styles.closed
    );
    return (
      <>
        <section className={styles.CategoryHeader}>
          <Link to={location.state ? location.state.prev : "/"}>
            <i className="fas fa-arrow-left" />
          </Link>
          <h1>{this.props.data.markdownRemark.frontmatter.naziv}</h1>
        </section>
        <section className={styles.MainWrapper}>
          <div className={sidebarClasses}>
            <SidebarFilters onFormSubmit={this.onFormSubmit} />
          </div>
          <button className={styles.FiltersModalBtn} onClick={this.onSidebarModalClick}>
            <i className="fas fa-sliders-h" />
          </button>
          <div className={styles.ArticleList}>
            <ArticleList articles={articles} />
          </div>
        </section>
      </>
    );
  }
}

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
            proizvodac
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
