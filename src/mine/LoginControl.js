import React, {useState} from 'react';

export default function LoginControlRender({bagCallback}) {
    const [isLogin, setLogin] = useState(false);

    if (isLogin) {
        return (
            <div className="navbar_acc" onClick={()=> bagCallback()}>
                <a>корзина/мой аккаунт</a>
            </div>
        )
    } else {
        return (
            <div className="navbar_acc" onClick={()=>bagCallback()}>
                <a>вход/регистрация</a>
            </div>
        )
    }
}
