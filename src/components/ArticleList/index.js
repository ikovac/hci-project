import React, { Component } from "react";
import Article from "../Article";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        {articles && articles.map(article => <Article key={article.node.id} node={article.node} />)}
      </>
    );
  }
}

export default ArticleList;
