import Container from "./ui/Container";
import ArticleHeaderList from "../components/articles/ArticleHeadersList";

const Home = () => {
  var articles = [
    {
      id: 1,
      name: "name",
      description:
        "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce.",
      created: "19.7.2020",
      keywords: ["1", "12"],
      ArticleId: 1,
    },
    {
      id: 2,
      name: "name1",
      description:
        "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce.",
      created: "19.7.2021",
      keywords: ["1", "15"],
      ArticleId: 2,
    },
  ];

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
