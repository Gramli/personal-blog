import ArticleFilter from "../filter-articles/ArticleFilter";
import Container from "../ui/Container";
import ArticleHeaderList from "./ArticleHeadersList";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ArticleHeader from "../../model/ArticleHeader";

const Articles:React.FC = () =>{

  const [articles, setArticles] = useState(new Array<ArticleHeader>());
  const [isLoading, setIsLoading] = useState(true);

 const fetchArticles = useCallback(async ():Promise<void> => {
   const result = await axios.get(`https://localhost:44378/Articles`);
    setArticles(result.data);
    setIsLoading(false);
 }, []);

  useEffect(() =>{
    fetchArticles();
  },[])

  return (
    <Container>
        <ArticleFilter onFetch={fetchArticles}/>
        <ArticleHeaderList articles={articles}/>
    </Container>
    )
}

export default Articles;