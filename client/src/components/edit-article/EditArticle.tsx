import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Container from "../ui/Container";
import ArticleForm from "../article-forms/ArticleForm";
import { useParams } from "react-router";
import ArticleContent from "../../model/ArticleContent";

const EditArticle: React.FC = () =>{

  let { articleId } = useParams<{articleId?: string}>();

  const [article, setArticle] = useState(new ArticleContent);
  const [isLoading, setIsLoading] = useState(false);

 const fetchArticle = useCallback(async (): Promise<void> => {
   setIsLoading(true);
   const result = await axios.get(`https://localhost:44378/${articleId}`);
    setArticle(result.data);
    setIsLoading(false);
 }, []);

 useEffect(() =>{
  fetchArticle();
},[fetchArticle])

let content = <p>No Articles</p>;

if (isLoading) {
  content = <p>Loading...</p>;
}

if(article){
  content = <ArticleForm article={article}/>
}

  return (
    <Container>
      <h3>Edit Article</h3>
      {content}
    </Container>
    )
}

export default EditArticle;