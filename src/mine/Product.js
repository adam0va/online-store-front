import React from "react";

export default function ProductRender(props) {
    const productItem = props.setItem;

    return (
        <div className="product">
            <img className="product_img"/>
            <div className="product_info">
                <div className="product_name">{productItem.brand}&nbsp;{productItem.name}</div>
                <div className="product_price">
                    от&nbsp;{productItem.price}
                    <span className="price"></span>
                    <span className="rouble">&nbsp;Р&nbsp;Цвет:&nbsp;{productItem.colour}</span>
                </div>
            </div>
        </div>
    );
}