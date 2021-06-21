import { useRouteMatch } from "react-router-dom";
import Container from "../ui/Container";
import ArticleHeader from "./ArticleHeader";

const ArticleHeaderList = (props) => {

  useRouteMatch();

  let content = <p>Search Articles!</p>;

  if(props.articles){
    content = props.articles.map((item) => (
      <ArticleHeader
        to={`${item.ArticleId}`}
        name={item.name}
        key={item.id}
        description={item.description}
        created={item.created}
        keywords={item.keywords}
      />
    ))};

  return (
    <Container>
        {content}
    </Container>
  );
};

export default ArticleHeaderList;
