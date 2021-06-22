import { useState } from "react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Label from "../ui/Label";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import DeleteArticleModal from "./DeleteArticleModal";

const AddArticleForm = () => {

  const [deleteState, setDeleteState] = useState(false);

  return (
    <>
    {deleteState && <DeleteArticleModal/>}
    <form>
      <section>
        <Label>Article Name</Label>
        <FormInput type="text" />
      </section>
      <section>
        <Label>Article Description</Label>
        <TextArea />
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
        <TextArea height="25em"/>
      </section>
      <Section>
        <Button type="button" onClick={() => setDeleteState(true)} width="50%">Delete</Button>
        <Button type="button" width="50%">Save</Button>
      </Section>
      <Section>
        <Button type="submit" width="100%">Submit</Button>
      </Section>
    </form>
    </>
  );
};

export default AddArticleForm;
