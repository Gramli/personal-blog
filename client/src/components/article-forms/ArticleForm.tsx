import { useState } from "react";
import Article from "../../model/ArticleContent";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Label from "../ui/Label";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import DeleteArticleModal from "./DeleteArticleModal";

const ArticleForm: React.FC<{article: Article}> = (props) => {

  const [deleteState, setDeleteState] = useState(false);
  const editState = props.article != null;

  const onDeleteArticleHandler = () => {
    setDeleteState(false);
  };
  return (
    <>
    {deleteState && editState && <DeleteArticleModal articleName={props.article.name} onDelete={onDeleteArticleHandler} onDeleteCancel={() => setDeleteState(false)}/>}
    <form>
      <section>
        <Label>Article Name</Label>
        <FormInput type="text" value={ editState ? props.article.name : ""}/>
      </section>
      <section>
        <Label>Article Description</Label>
        <TextArea value={ editState ? props.article.description : ""}/>
      </section>
      <section>
        <Label>Keywords</Label>
        <TextArea />
      </section>
      <Section>
        <Button type="button" width="50%">Add Image</Button>
      </Section>
      <section>
        <Label>Content</Label>
        <TextArea height="25em" value={ editState ? props.article.content : ""}/>
      </section>
      <Section>
        {editState && <Button type="button" onClick={() => setDeleteState(true)} width="50%">Delete</Button>}
        <Button type="button" width="50%">Save</Button>
      </Section>
      <Section>
        <Button type="submit" width="100%">Submit</Button>
      </Section>
    </form>
    </>
  );
};

export default ArticleForm;
