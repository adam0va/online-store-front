import React, {useState, useEffect} from 'react';

export default function ProductRender(props) {
    const URL = "https://rsoi-online-store-orders.herokuapp.com/";
    const suffix = "orders_short/";
    const orderUuid = "0b680188-6100-4ef2-bba2-a672c56c5cce";

    const productItem = props.setItem;

    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    function buttonPost(itemUuid) {
        let data = [];
        fetch(URL + suffix + orderUuid)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.itemsInOrder === null) {
                        result.itemsInOrder = [];
                    }
                    result.itemsInOrder.push(itemUuid);
                    data = JSON.stringify(result);
                    console.log(data);
                    // далее патч
                }
            )
            .then( () => {
                    fetch(URL + orderUuid + "/", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "PATCH",
                        body: data
                    }).then(r => console.log("success"))
                }
            )
    }
    return (
        <div className="product" id={productItem.uuid}>
            <img className="product_img"/>
            <div className="product_info">
                <div className="product_name">{productItem.brand}&nbsp;{productItem.name}</div>
                <div className="product_price">
                    от&nbsp;{productItem.price}
                    <span className="price"></span>
                    <span className="rouble">&nbsp;Р&nbsp;Цвет:&nbsp;{productItem.color}</span>
                </div>
                <button className="product_button" onClick={() => buttonPost(productItem.uuid)}>Добавить в корзину</button>
            </div>
        </div>
    );
}