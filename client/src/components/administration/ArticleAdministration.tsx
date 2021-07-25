import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ArticleHeaderList from "../article-headers/ArticleHeadersList";
import Button from "../ui/Button";
import Container from "../ui/Container";

const ArticleAdministration: React.FC = () => {

  const {path} = useRouteMatch();

  return (
    <Container>
      <Link to={`${path}/addArticle`}>
        <Button width="100%">Add New Article</Button>
      </Link>
      <h3>In Development</h3>
      <ArticleHeaderList path={`https://localhost:44378/NotSubmited`}/>
    </Container>
  );
};

export default ArticleAdministration;
