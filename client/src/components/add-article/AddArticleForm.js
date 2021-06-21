import FormInput from "../ui/FormInput";
import Label from "../ui/Label";

const AddArticleForm = () => {
  return (
    <form>
      <div>
        <Label>Article Name</Label>
        <FormInput type="text" />
      </div>
      <div>
        <Label>Article Description</Label>
        <textarea />
      </div>
    </form>
  );
};

export default AddArticleForm;
