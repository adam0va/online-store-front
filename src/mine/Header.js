import React from "react";

export default function HeaderRender({appCallback}) {
    return (
        <div className="menu">
            <div className="container">
                <ul className="menu_ul">
                    <li className="menu_li" onClick={() => appCallback("Lipstick", true)}>
                        <span className="a">помады</span>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Mascara", true)}>
                        <span className="a">туши</span>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Foundation", true)}>
                        <span className="a">тональные кремы</span>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Blush", true)}>
                        <span className="a">румяна</span>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Powder", true)}>
                        <span className="a">пудры</span>
                    </li>
                    <li className="menu_li" onClick={() => appCallback("Eyeliner", true) }>
                        <span className="a">подводки</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}