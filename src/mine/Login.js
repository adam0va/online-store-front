import React, {useState} from "react";
import AccControlRender from "./AccControl";

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
                    <div className="login_group">
                        <label htmlFor="login" className="login_label">Телефонный номер:</label>
                        <input type="text" id="login" className="reg_input"/>
                    </div>
                    <div className="login_group">
                        <label htmlFor="password" className="login_label">Пароль:</label>
                        <input type="text" id="password" className="reg_input" name="password"/>
                    </div>
                    <button id="login_button">Войти</button>
                    <span>или <a onClick={() => setLoginPage(false)}>зарегистрироваться</a></span>
                    <div><a onClick={() => setLoggedIn(true)}>успешная верификация test</a></div>
                </div>
            );
        } else {
            return (
                <div className="login_container">
                    <h2 className="login_title">Регистрация</h2>
                    <div className="login_group">
                        <label htmlFor="name_reg" className="login_label">Ваше Имя / Фамилия:</label>
                        <input type="text" id="name_reg" className="reg_input" name="name_reg"/>
                    </div>
                    <div className="login_group">
                        <label htmlFor="login_reg" className="login_label">Телефонный номер:</label>
                        <input type="text" id="login_reg" className="reg_input" name="login_reg"/>
                    </div>
                    <div className="login_group">
                        <label htmlFor="password_reg" className="login_label">Пароль:</label>
                        <input type="text" id="password_reg" className="reg_input" name="password_reg"/>
                    </div>
                    <div className="login_group">
                        <label htmlFor="password_again_reg" className="login_label">Пароль повторно:</label>
                        <input type="text" id="password_again_reg" className="reg_input" name="password_again_reg"/>
                    </div>
                    <button id="reg_button">Зарегистрироваться</button>
                    <span>или <a onClick={() => setLoginPage(true)}>войти</a></span>
                </div>
            );
        }
    }
}