import React, { Component } from "react";
import renderHtmlToReact from "../RenderHtmlToReact";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
    console.log(this.props.articles);
  }

  render() {
    const { articles } = this.state;
    return <section>{renderHtmlToReact(articles[0].node.htmlAst.children[0])}</section>;
  }
}

export default ArticleList;
