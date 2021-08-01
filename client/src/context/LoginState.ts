export type LoginState = {
    logged: boolean;
    token: string;
    userName: string;
    logIn: (userName: string, passw: string) => void;
    logOut: () => void;
}