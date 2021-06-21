import ArticleFilter from "../filter-articles/ArticleFilter";
import Container from "../ui/Container";
import ArticleHeaderList from "./ArticleHeadersList";

const Articles = () =>{

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
        <ArticleFilter/>
        <ArticleHeaderList articles={articles}/>
    </Container>
    )
}

export default Articles;