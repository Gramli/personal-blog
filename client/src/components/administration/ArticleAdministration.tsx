import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ArticleHeader from "../../model/ArticleHeader";
import ArticleHeaderList from "../articles/ArticleHeadersList";
import Button from "../ui/Button";
import Container from "../ui/Container";

const ArticleAdministration: React.FC = () => {

  const {path} = useRouteMatch();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 const fetchArticles = useCallback(async (): Promise<void> => {
   const result = await axios.get(`https://localhost:44378/Articles`);
    setArticles(result.data);
    setIsLoading(false);
 }, []);

  useEffect(() =>{
    fetchArticles();
  },[])

  return (
    <Container>
      <Link to={`${path}/addArticle`}>
        <Button width="100%">Add New Article</Button>
      </Link>
      <h3>In Development</h3>
      <ArticleHeaderList articles={articles}/>
    </Container>
  );
};

export default ArticleAdministration;
