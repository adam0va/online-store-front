import React from "react";
import jsonLipstick from "../mine/json_data/lipstick"
import jsonMascara from "../mine/json_data/mascara"
import jsonFoundation from "../mine/json_data/foundation"
import jsonPowder from "../mine/json_data/powder"
import jsonBlush from "../mine/json_data/blush"
import jsonEyeliner from "../mine/json_data/eyeliner"

export default function HeaderRender({appCallback}) {
    return (
        <div className="menu">
            <div className="container">
                <ul className="menu_ul">
                    <li className="menu_li" onClick={() => appCallback("Lipstick", true)}>
                        <a id="lipstick_link">помады</a>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Mascara", true)}>
                        <a id="mascara_link">туши</a>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Foundation", true)}>
                        <a id="foundation_link">тональные кремы</a>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Blush", true)}>
                        <a id="blush_link">румяна</a>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Powder", true)}>
                        <a id="powder_link">пудры</a>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Eyeliner", true) }>
                        <a id="eyelier_link">подводки</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}