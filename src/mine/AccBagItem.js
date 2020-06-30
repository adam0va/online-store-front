import React from "react";

export default function AccBagItemRender(props) {


    return (
        <div className="bag_item_row">
            <span id="bag_item_number" className="bag_row_item">1</span>
            <a href="" id="bag_item_link" className="bag_row_item">
                <img src="" alt="" id="bag_item_img"/>
            </a>
            <div className="bag_item_info bag_row_item_big">
                <span id="bag_item_name">Example example example</span>
                <span id="bag_item_class">Example</span>
                <button id="bag_delete_button">Удалить</button>
            </div>
            <div className="bag_item_number_wrap bag_row_item">
                <button id="bag_item_count_minus_button">−</button>
                <div id="bag_item_count_number">1</div>
                <button id="bag_item_count_plus_button">+</button>
            </div>
            <div id="bag_item_price" className="bag_row_item">690 Р</div>
        </div>
    );
}