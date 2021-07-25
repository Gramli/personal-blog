import ArticleFilter from "../filter-articles/ArticleFilter";
import Container from "../ui/Container";
import ArticleHeaderList from "../article-headers/ArticleHeadersList";
import { useCallback } from "react";

const Articles:React.FC = () =>{

 const fetchArticles = useCallback(async ():Promise<void> => {
 }, []);

  return (
    <Container>
        <ArticleFilter onFetch={fetchArticles}/>
        <ArticleHeaderList path={`https://localhost:44378/Articles`}/>
    </Container>
    )
}

export default Articles;