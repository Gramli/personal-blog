import { useRouteMatch } from "react-router-dom";
import ArticleHeaderM from "../../model/ArticleHeader";
import Container from "../ui/Container";
import ArticleHeader from "./ArticleHeader";

const ArticleHeaderList: React.FC<{
  articles:ArticleHeaderM[]
}> = (props) => {

  useRouteMatch();

  let content: JSX.Element[];
  content = [<p>No Data!</p>];

  if(props.articles){
    content = props.articles.map((item) => (
      <ArticleHeader
        to={`${item.articleId}`}
        name={item.name}
        key={item.id}
        articleId={item.articleId}
        description={item.description}
        created={item.created}
        keywords={item.keywords} />
    ));};

  return (
    <Container>
        {content}
    </Container>
  );
};

export default ArticleHeaderList;
