import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Center from "../ui/Center";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Section from "../ui/Section";

const Login: React.FC = () =>{

    const [isLogged, setIsLogged] = useState(false);


    const passwRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();


    const submitHanlder = async (event:React.FormEvent) => {
        event.preventDefault();

        const enteredEmail= emailRef.current?.value;
        const enteredPassw= passwRef.current?.value;

        //add validation
        try{
        const {status, data} = await axios.post('', {
                email: enteredEmail,
                password: enteredPassw,
                returnSecureToken: true,
            });

            if(status === 200){

                setIsLogged(true);
                console.log(data);
            }
        }
        catch(error){
            console.log(error);
        }
    };


    return <Container center={true}>
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
    </Container>
};

export default Login;

