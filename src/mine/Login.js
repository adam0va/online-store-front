import React, {useState} from "react";
import AccControlRender from "./AccControl";
import RegFormRender from "./RegForm";
import LoginFormRender from "./LoginForm";

export default function LoginRender(props) {
    const [isLoginPage, setLoginPage] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);


    if (isLoggedIn){
        return (
            <AccControlRender/>
        );
    } else {
        if (isLoginPage) {
            return (
                <div className="login_container">
                    <h2 className="login_title">Вход</h2>
                    <LoginFormRender/>
                    <span>или <a onClick={() => setLoginPage(false)}>зарегистрироваться</a></span>
                    <div><a onClick={() => setLoggedIn(true)}>успешная верификация test</a></div>
                </div>
            );
        } else {
            return (
                <div className="login_container">
                    <h2 className="login_title">Регистрация</h2>
                    <RegFormRender/>
                    <span>или <a onClick={() => setLoginPage(true)}>войти</a></span>
                </div>
            );
        }
    }
}