import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import ArticleHeaderM from "../../model/ArticleHeader";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import ArticleHeader from "./ArticleHeader";

const ArticleHeaderList: React.FC<{
  path: string
}> = (props) => {

  type LoadingError = {
    isError: boolean,
    errorMsg?: string,
  }

  useRouteMatch();
  let content = [<p>No Articles</p>];
  const [articles, setArticles] = useState(new Array<ArticleHeaderM>());
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState<LoadingError>({isError: false, errorMsg: ``});

 const fetchArticles = useCallback(async (): Promise<void> => {
   try{
      const result = await axios.get(props.path);
      setArticles(result.data);
    }
    catch(err){
      if(axios.isAxiosError(err)){
        setError({isError: true, errorMsg: err.message});
      }
    }
    finally{
      setIsLoading(false);
    }
 }, [props.path]);

  useEffect(() =>{
    fetchArticles();
  },[fetchArticles])

  if (isLoading) {
    content = [<Loading/>];
  }

  if(isError.isError){
    content = [<p>{`${isError.errorMsg}`}</p>];
  }
  
  if(articles.length > 0){
    content = articles.map((item) => (
      <ArticleHeader
        to={`${item.articleId}`}
        name={item.name}
        key={item.id}
        articleId={item.articleId}
        description={item.description}
        created={item.created} />
    ));};

  return (
    <Container>
        {content}
    </Container>
  );
};

export default ArticleHeaderList;
