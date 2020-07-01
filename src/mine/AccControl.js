import React, {useEffect, useState} from "react";
import AccHeader from "./AccHeader";
import AccBagRender from "./AccBag";
import AccHistoryRender from "./AccHistory";
import AccInfoRender from "./AccInfo";
import AccHistoryItemRender from "./AccHistoryItem";
import AccBagItemRender from "./AccBagItem";
import AccBagSummRender from "./AccBagSumm";
import ProductRender from "./Product";

export default function AccControlRender() {
    const URL = "https://rsoi-online-store-orders.herokuapp.com/";
    const orderUuid = "0b680188-6100-4ef2-bba2-a672c56c5cce/";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let summ = 0;
    const [menu, setMenu] = useState("bag");

    function foo(bar) {
        setMenu(bar);
    }


    useEffect(() => {
        fetch(URL + orderUuid)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.itemsInOrder);
                    console.log(items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])

    if (menu === "bag") {
        return (
            <div>
                <AccHeader setAccMenu={foo}/>
                <AccBagRender/>
                {
                    items.map((item, index) => {
                        summ += item.price;
                        console.log(summ);
                            return <AccBagItemRender key={index} setItem={item}/>;
                        }
                    )
                }
                <AccBagSummRender props={summ}/>
            </div>
        );
    } else if (menu === "history") {
        return (
            <div>
                <AccHeader setAccMenu={foo}/>
                <AccHistoryRender/>
                <AccHistoryItemRender/>
            </div>
        );
    } else if (menu === "settings") {
        return (
            <div>
                <AccHeader setAccMenu={foo}/>
                <AccInfoRender/>
            </div>
        );
    }
}