import React, {useState} from "react";
import AccHeader from "./AccHeader";
import AccBagRender from "./AccBag";
import AccHistoryRender from "./AccHistory";
import AccInfoRender from "./AccInfo";
import AccHistoryItemRender from "./AccHistoryItem";
import AccBagItemRender from "./AccBagItem";
import AccBagSummRender from "./AccBagSumm";

export default function AccControlRender() {
    const [menu, setMenu] = useState("bag");

    function foo(bar) {
        setMenu(bar);
    }

    if (menu === "bag") {
        return (
            <div>
                <AccHeader setAccMenu={foo}/>
                <AccBagRender/>
                <AccBagItemRender/>
                <AccBagSummRender/>
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