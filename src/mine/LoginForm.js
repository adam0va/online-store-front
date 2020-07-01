import React, {useState} from "react";

export default function LoginFormRender(props) {

    return (
        <form>
            <div className="login_group">
                <label htmlFor="login" className="login_label">Телефонный номер:</label>
                <input type="text" id="login" className="reg_input"/>
            </div>
            <div className="login_group">
                <label htmlFor="password" className="login_label">Пароль:</label>
                <input type="text" id="password" className="reg_input" name="password"/>
            </div>
            <button type="button" id="login_button">Войти</button>
        </form>
    )
}