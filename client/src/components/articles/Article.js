import { useParams } from "react-router-dom";

const Article = () =>{
  
  let { articleId } = useParams();

  return (
    <div>
      <h3>{articleId}</h3>
    </div>
    )
}

export default Article;