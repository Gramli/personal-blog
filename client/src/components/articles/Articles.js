import ArticleFilter from "../filter-articles/ArticleFilter";
import Container from "../ui/Container";
import ArticleHeaderList from "./ArticleHeadersList";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Articles = () =>{

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

 const fetchArticles = useCallback(async () => {
   const result = await axios.get(`https://localhost:44378/Articles`);
    setArticles(result.data);
    setIsLoading(false);
 });

  useEffect(() =>{
    fetchArticles();
  },[])

  return (
    <Container>
        <ArticleFilter/>
        <ArticleHeaderList articles={articles}/>
    </Container>
    )
}

export default Articles;