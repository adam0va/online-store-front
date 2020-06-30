import React from "react";

export default function AccMyBagRender({setAccMenu}) {
    return (
        <ul className="acc_ul">
            <li className="acc_li" onClick={() => setAccMenu("bag")}>
                <a>Корзина</a>
            </li>
            <div className="line"></div>
            <li className="acc_li" onClick={() => setAccMenu("history")}>
                <a>История заказов</a>
            </li>
            <div className="line"></div>
            <li className="acc_li" onClick={() => setAccMenu("settings")}>
                <a>Настройки аккаунта</a>
            </li>
        </ul>
    );
}