import React from "react";
import Article from "../Article";

const ArticleList = ({ articles }) => (
  <>
    {articles &&
      articles.map(article => (
        <Article key={article.node.id} node={article.node} />
      ))}
  </>
);

export default ArticleList;
