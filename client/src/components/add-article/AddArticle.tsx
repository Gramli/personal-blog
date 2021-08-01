import Container from "../ui/Container";
import ArticleForm from "../article-forms/ArticleForm";
import ArticleContent from "../../model/ArticleContent";
import Article from "../../model/Article";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AddArticle: React.FC = () =>{

  const loginCtx = useContext(LoginContext);

  const onSubmitHandler = (article: Article) =>{

    var config = {
      headers: {"IdToken": loginCtx.token}
  };

    axios.post(`https://localhost:44378/Administration/addArticle`,article, config);
  }


  return (
    <Container>
      <h3>Add New Article</h3>
      <ArticleForm onSubmit={onSubmitHandler} article={new ArticleContent()}/>
    </Container>
    )
}

export default AddArticle;