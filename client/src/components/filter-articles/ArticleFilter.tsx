import Container from "../ui/Container";
import Button from "../ui/Button";
import SearchInput from "../ui/SearchInput";
import React, { useState } from "react";

const ArticleFilter: React.FC<{onFetch: (text:string) => void}> = (props) => {

    const [inputValue, setInputValue] = useState('');

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(event.target.value);
    };

    const fetchArticles = ()=>{
        console.log(inputValue);
        //props.onFetch();
    };

  return (
    <Container center={true}>
      <SearchInput value={inputValue} onChange={inputChangeHandler} type="text"></SearchInput>
      <Button width="100%" onClick={fetchArticles}>Search</Button>
    </Container>
  );
};

export default ArticleFilter;
