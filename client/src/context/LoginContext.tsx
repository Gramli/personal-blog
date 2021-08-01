import axios from "axios";
import React, { createContext, useState } from "react";
import { LoginState } from "./LoginState";

const loginStateDefault : LoginState = {
    logged: false,
    token: "",
    userName: "",
    logIn: (userName: string, passw: string) => {},
    logOut: () => {}
}

export const LoginContext  = React.createContext<LoginState>(loginStateDefault);

const LoginContextProvider: React.FC = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState<LoginState>(loginStateDefault);

    const logInHandler = async (userName: string, passw: string) => {
        try{
            const {status, data} = await axios.post('', {
                    email: userName,
                    password: passw,
                    returnSecureToken: true,
                });
    
                if(status === 200){
    
                    setIsLoggedIn({
                        logged: true,
                        token: data.idToken,
                        userName: userName,
                        logIn: () => {},
                        logOut: () => {}
                    });
                }
            }
            catch(error){
                console.log(error);
            }
    }

    const logOutHandler = () =>{
        setIsLoggedIn({
            logged: false,
            token: "",
            userName: "",
            logIn: () => {},
            logOut: () => {}
        });
    };

    const loginStateValue: LoginState = {
        logged: isLoggedIn.logged,
        token: isLoggedIn.token,
        userName: isLoggedIn.userName,
        logIn: logInHandler,
        logOut: logOutHandler,
    }

    return <LoginContext.Provider value={loginStateValue}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContextProvider;