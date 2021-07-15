import Container from "./ui/Container";
import ArticleHeaderList from "./articles/ArticleHeadersList";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ArticleHeader from "../model/ArticleHeader";

const Home: React.FC = () => {

  const [articles, setArticles] = useState(new Array<ArticleHeader>());
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
      <section>
        <h3>Welcome!</h3>
        <p>Both the CSS and the jQuery solutions do the same thing, so you can pick which one works best for your situation. I mention it in case someone interprets that you have to use both.</p>
      </section>
      <section>
        <h3>Newest Articles</h3>
        <ArticleHeaderList articles={articles} />
      </section>
    </Container>
  );
};

export default Home;
