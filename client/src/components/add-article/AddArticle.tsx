import Container from "../ui/Container";
import ArticleForm from "../article-forms/ArticleForm";
import ArticleContent from "../../model/ArticleContent";

const AddArticle = () =>{
  return (
    <Container>
      <h3>Add New Article</h3>
      <ArticleForm article={new ArticleContent()}/>
    </Container>
    )
}

export default AddArticle;