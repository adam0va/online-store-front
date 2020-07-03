import React from "react";

export default function AccBagItemRender(props) {
    const URL = "https://rsoi-online-store-orders.herokuapp.com/";
    const suffix = "orders_short/";

    function deleteItem(itemUuid) {
        let data = [];

        fetch(URL + suffix + localStorage.getItem("userCartUUID"), {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access")
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    let index = result.itemsInOrder.findIndex((item) => {
                        return item === itemUuid;
                    });
                    result.itemsInOrder.splice(index, 1);
                    data = JSON.stringify(result);
                }
            )
            .then(
                (error) => {
                    console.log(error);
                })
            .then( () => {
                    fetch(URL + localStorage.getItem("userCartUUID") + "/", {
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem("access"),
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "PATCH",
                        body: data
                    }).then(r => console.log("item deleted"))
                }
            )
    }


        const productItem = props.setItem;

        return (
            <div className="bag_item_row">
                <span id="bag_item_number" className="bag_row_item">1</span>
                <a href="" id="bag_item_link" className="bag_row_item">
                    <img src="" alt="" id="bag_item_img"/>
                </a>
                <div className="bag_item_info bag_row_item_big">
                    <span id="bag_item_name">{productItem.brand}&nbsp;{productItem.name}</span>
                    <span id="bag_item_class">{productItem.category}</span>
                    <button id="bag_delete_button" onClick={() => deleteItem(productItem.uuid)}>Удалить</button>
                </div>
                <div className="bag_item_number_wrap bag_row_item">
                </div>
                <div id="bag_item_price" className="bag_row_item">{productItem.price}</div>
            </div>
        );

}