import { useParams } from "react-router-dom";
import Container from "../ui/Container";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'

const Article = () =>{
  
  let { articleId } = useParams();

  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(false);

 const fetchArticle = useCallback(async () => {
   setIsLoading(true);
   const result = await axios.get(`https://localhost:44378/${articleId}`);
    setArticle(result.data);
    setIsLoading(false);
 });

 useEffect(() =>{
  fetchArticle();
},[fetchArticle])

let content = <p>No Article</p>;

if (isLoading) {
  content = <p>Loading...</p>;
}

if(article){
  content = <><h3>{article.name}</h3>
  <p>{article.description}</p>
  {parse(article.content)}
  </>
}

  return (
    <Container>
      {content}
    </Container>
    )
}

export default Article;