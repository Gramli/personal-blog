import Container from "../ui/Container";
import ArticleForm from "./ArticleForm";

const EditArticle = (props) =>{
  return (
    <Container>
      <h3>Edit Article</h3>
      <ArticleForm article={props.article}/>
    </Container>
    )
}

export default EditArticle;