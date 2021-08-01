import React, { useState } from "react";
import ArticleContent from "../../model/ArticleContent";
import Article from "../../model/Article";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Label from "../ui/Label";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import DeleteArticleModal from "./DeleteArticleModal";
import UseImagePicker from 'use-image-selector/lib/UseImagePicker'

const ArticleForm: React.FC<{article: ArticleContent, onSubmit: (article: Article) => void}> = (props) => {

  const [uploadImageState, setUploadImageState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const editState = props.article != null;

  const onDeleteArticleHandler = () => {
    setDeleteState(false);
  };

  const onUploadImageStateHandler = (value: boolean) =>{
    setUploadImageState(value);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newArticle: Article = new Article;
    newArticle.description = "something";
    newArticle.name = "Something";
    newArticle.content = "somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething";
    props.onSubmit(newArticle)
  };

  const portalElement = document.getElementById("overlays") as HTMLElement;

  return (
    <>
    {deleteState && editState && <DeleteArticleModal articleName={props.article.name} onDelete={onDeleteArticleHandler} onDeleteCancel={() => setDeleteState(false)}/>}
    {uploadImageState && <UseImagePicker overlayElement={portalElement} onSubmit={(result) => {}} onCancel={() => {onUploadImageStateHandler(false)}}/>}
    <form onSubmit={onSubmitHandler}>
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
        <Button onClick={() => {onUploadImageStateHandler(true)}} type="button" width="50%">Upload Image</Button>
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
