import { useParams } from "react-router-dom";
import Container from "../ui/Container";

const Article = () =>{
  
  let { articleId } = useParams();

  return (
    <Container>
      <h3>{articleId}</h3>
    </Container>
    )
}

export default Article;