import { Link, useRouteMatch } from "react-router-dom";
import ArticleHeaderList from "../articles/ArticleHeadersList";
import Button from "../ui/Button";
import Container from "../ui/Container";

const ArticleAdministration = () => {

    const {path} = useRouteMatch();

    var articles = [
      {
          id: 1,
          name: "name",
          description: "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce.",
          created: "19.7.2020",
          keywords: ["1","12"],
          ArticleId: 1,
      },
      {
        id: 2,
        name: "name1",
        description: "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce.",
        created: "19.7.2021",
        keywords: ["1","15"],
        ArticleId: 2,
    }
  ];

  return (
    <Container>
      <Link to={`${path}/addArticle`}>
        <Button width="100%">Add New Article</Button>
      </Link>
      <h3>In Development</h3>
      <ArticleHeaderList articles={articles}/>
    </Container>
  );
};

export default ArticleAdministration;
