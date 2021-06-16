import { useRouteMatch } from "react-router-dom";

import ArticleHeader from "./ArticleHeader";

const ArticleHeaderList = () => {
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
  let { path } = useRouteMatch();

  return (
    <div>
        {articles.map((item) => (
          <ArticleHeader
            to={`${path}/${item.ArticleId}`}
            name={item.name}
            key={item.id}
            description={item.description}
            created={item.created}
            keywords={item.keywords}
          />
        ))}
    </div>
  );
};

export default ArticleHeaderList;
