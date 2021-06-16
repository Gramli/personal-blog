import { Link } from "react-router-dom";
import Card from "../ui/Card"

const ArticleHeader = (props) =>{

    return (
        <Link to={props.to}>
            <Card>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </Card>
        </Link>
    );
}

export default ArticleHeader;