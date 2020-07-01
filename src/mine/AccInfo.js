import React, {useState} from "react";
import ChangeAccInfoRender from "./ChangeAccInfo";


export default function AccInfoRender(props) {
    const [state, setState] = useState(false);

    if (state) {
        return (
            <ChangeAccInfoRender/>
        );
    } else {
        return (
            <div className="accinfo_wrap">
                <h2 className="accinfo_title">Информация о вас</h2>
                <div className="accinfo_title_row">
                    <div className="accinfo_title_name accinfo_row_item">Ваше Имя / Фамилия</div>
                    <div className="accinfo_title_login accinfo_row_item">Ваш логин</div>
                </div>
                <div className="accinfo_item">
                    <div id="accinfo_item_name" className="accinfo_row_item">Петя Капустин</div>
                    <div id="accinfo_item_login" className="accinfo_row_item">+72342153465</div>
                </div>
                <button id="accinfo_change_button" onClick={() => setState(true)}>Изменить данные</button>
            </div>
        );
    }
}