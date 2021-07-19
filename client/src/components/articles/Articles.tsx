import ArticleFilter from "../filter-articles/ArticleFilter";
import Container from "../ui/Container";
import ArticleHeaderList from "./ArticleHeadersList";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ArticleHeader from "../../model/ArticleHeader";
import Loading from "../ui/Loading";

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

  let content = <p>No Article</p>;

  if (isLoading) {
    content = <Loading/>;
  }
  
  if(articles.length > 0){
    content = <ArticleHeaderList articles={articles}/>
  }

  return (
    <Container>
        <ArticleFilter onFetch={fetchArticles}/>
        {content}
    </Container>
    )
}

export default Articles;