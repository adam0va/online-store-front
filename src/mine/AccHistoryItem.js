import React from "react";

export default function AccHistoryItemRender(props) {
    return (
        <div className="history_item_row">
            <div className="history_item_info history_row_item">
                <div className="history_item_info_line">
                    <div id="history_item_info_line_name">L'oreal Color Riche Valentines Edition</div>
                    <div id="history_item_info_line_count">1 шт</div>
                </div>
            </div>
            <div id="history_item_number" className="history_row_item">165734</div>
            <div id="history_item_date" className="history_row_item">22.11.2020 17:38</div>
            <div id="history_item_status" className="history_row_item">Оплачено</div>
            <div id="history_item_price" className="history_row_item">23424 Р</div>
        </div>
    );
}