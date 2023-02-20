import React, { cloneElement } from "react";


interface Props {
    title: string;
    cards: JSX.Element[];
}


export default function Gallery({title, cards}: Props): JSX.Element {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = cloneElement(cards[i], { key: i });
    }

    return (
        <div className="gallery-container"
            style={{
                backgroundColor: "#353438",
                margin: "1%",
            }}
        >
            <h1>{title}</h1>
            <div className="gallery">
                {cards}
            </div>
        </div>
    );
}