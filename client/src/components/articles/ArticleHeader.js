import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Card from "../ui/Card";

const ArticleHeader = (props) => {
  return (
    <Card>
      <Link to={props.to}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </Link>
      <Link to={`administration/editArticle/${props.articleId}`}>
        <Button>Edit</Button>
      </Link>
    </Card>
  );
};

export default ArticleHeader;
