import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { LoginContext } from '../../context/LoginContext';
import ArticleHeaderList from "../article-headers/ArticleHeadersList";
import Button from "../ui/Button";
import Center from "../ui/Center";
import Container from "../ui/Container";

const ArticleAdministration: React.FC = () => {

  const {path} = useRouteMatch();
  const loginCtx = useContext(LoginContext);

  let content = <Center><h1>You shall not pass.</h1></Center>;

if(loginCtx.logged){
  content = <>
  <Link to={`${path}/addArticle`}>
    <Button width="100%">Add New Article</Button>
  </Link>
  <h3>In Development</h3>
  <ArticleHeaderList path={`https://localhost:44378/NotSubmited`}/>
</>;
}

  return <Container>{content}</Container>;
};

export default ArticleAdministration;
