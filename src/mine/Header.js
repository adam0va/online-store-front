import React from "react";
import logo from "./img/logo.png";
import { useState } from 'react';
import jsonLipstick from "../mine/json_data/lipstick"
import jsonMascara from "../mine/json_data/mascara"
import jsonFoundation from "../mine/json_data/foundation"
import jsonPowder from "../mine/json_data/powder"
import jsonBlush from "../mine/json_data/blush"
import jsonEyeliner from "../mine/json_data/eyeliner"

export default function HeaderRender({appCallback}) {

    return (
        <header>
            <div className="navbar_bg">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <a href="index.html">
                                <img id="logo_img" src={logo} />
                            </a>
                        </div>
                        <div>
                            <div className="navbar_reg">
                                <a>вход/регистрация</a>
                            </div>
                            <div className="navbar_basket">
                                <a>корзина</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <ul className="menu_ul">
                        <li className="menu_li" onClick={() => appCallback(jsonLipstick)}>
                            <a id="lipstick_link">помады</a>
                        </li>
                        <li className="menu_li" onClick={() => appCallback(jsonMascara)}>
                            <a id="mascara_link">туши</a>
                        </li>
                        <li className="menu_li" onClick={() => appCallback(jsonFoundation)}>
                            <a id="foundation_link">тональные кремы</a>
                        </li>
                        <li className="menu_li" onClick={() => appCallback(jsonBlush)}>
                            <a id="blush_link">румяна</a>
                        </li>
                        <li className="menu_li" onClick={() => appCallback(jsonPowder)}>
                            <a id="powder_link">пудры</a>
                        </li>
                        <li className="menu_li" onClick={() => appCallback(jsonEyeliner)}>
                            <a id="eyelier_link">подводки</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}