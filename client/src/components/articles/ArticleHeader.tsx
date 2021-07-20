import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Card from "../ui/Card";
import StyledLink from "../ui/StyledLink";

const ArticleHeader: React.FC<{
  to: string,
  name: string,
  description: string,
  articleId: number,
  created: Date,
}> = (props) => {
  return (
    <Card>
      <StyledLink to={props.to}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </StyledLink>
      <Link to={`administration/editArticle/${props.articleId}`}>
        <Button>Edit</Button>
      </Link>
    </Card>
  );
};

export default ArticleHeader;
