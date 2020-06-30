import React from "react";

export default function AccHistoryRender(props) {
    return (
        <div className="history_wrap">
            <h2 className="history_title">История заказов</h2>
            <div className="history_title_row">
                <div className="history_title_info history_row_item">Товары в заказе</div>
                <div className="history_title_number history_row_item">Номер заказа</div>
                <div className="history_title_date history_row_item">Дата</div>
                <div className="history_title_pay history_row_item">Оплата</div>
                <div className="history_title_price history_row_item">Стоимость заказа</div>
            </div>
        </div>
    );
}