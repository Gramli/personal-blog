import axios from "axios";
import React, { MutableRefObject, useContext, useRef } from "react";
import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Center from "../ui/Center";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Section from "../ui/Section";
import {LoginContext} from "../../context/LoginContext";

const Login: React.FC = () =>{

    const loginCtx = useContext(LoginContext);

    const passwRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
    const emailRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;


    const submitHanlder = async (event:React.FormEvent) => {
        event.preventDefault();

        const enteredEmail= emailRef.current?.value;
        const enteredPassw= passwRef.current?.value;

        if(enteredEmail != undefined && enteredPassw != undefined){
            loginCtx.logIn(enteredEmail, enteredPassw);
        }
    };

    let content = (<Center><h1>Successfuly logged</h1></Center>);

    if(!loginCtx.logged){
        content = (
        <>
        <Center>
            <h1>Login Page</h1>
        </Center>
        <Card>
            <form>
                <Section>
                    <Label htmlFor='email' align={'center'}>UserName:</Label>
                    <Input type='email' id='email' required ref={emailRef}/>
                </Section>
                <Section>
                    <Label htmlFor='password' align={'center'}>Password:</Label>
                    <Input type='password' id='password' required ref={passwRef}/>
                </Section>
                <Center>
                    <Button type="submit" width="50%" onClick={submitHanlder}>Login</Button>
                </Center>
            </form>
        </Card>
        </>);
    }

    return <Container center={true}>
        {content}
    </Container>
};

export default Login;

