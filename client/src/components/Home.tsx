import Container from "./ui/Container";
import ArticleHeaderList from "./article-headers/ArticleHeadersList";

const Home: React.FC = () => {
  return (
    <Container>
      <section>
        <h3>Welcome!</h3>
        <p>Both the CSS and the jQuery solutions do the same thing, so you can pick which one works best for your situation. I mention it in case someone interprets that you have to use both.</p>
      </section>
      <section>
        <h3>Newest Articles</h3>
        <ArticleHeaderList path={`https://localhost:44378/Articles`}/>
      </section>
    </Container>
  );
};

export default Home;
