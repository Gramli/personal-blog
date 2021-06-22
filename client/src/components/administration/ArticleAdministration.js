import { Link, useRouteMatch } from "react-router-dom";
import Button from "../ui/Button";
import Container from "../ui/Container";

const ArticleAdministration = () => {

    const {path} = useRouteMatch();

  return (
    <Container>
      <Link to={`${path}/addArticle`}>
        <Button width="100%">Add New Article</Button>
      </Link>
      <h3>In Development</h3>
    </Container>
  );
};

export default ArticleAdministration;
