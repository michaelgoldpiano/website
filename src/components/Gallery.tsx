import React from "react";


interface Props {
    title: string;
    cards: JSX.Element[];
}


export default function Gallery({title, cards}: Props): JSX.Element {
    return (
        <div
            style={{
                "backgroundColor": "#353438",
                "margin": "1%",
            }}
        >
            <h1>{title}</h1>
            <div
                style={{
                    "display": "grid",
                    // "gridTemplateColumns": "repeat(3, [col-start] fit-isContentEditable(9rem))",
                    // "gridAutoRows": "fit-content(12rem) minmax(10rem, 14rem) auto auto",
                    // "gap": ".5rem",
                    "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
                    "gridTemplateRows": "auto auto auto auto",
                    // "gridAutoColumns": "minmax(0, 1fr)",
                    "gridAutoFlow": "row",
                    // "gridTemplateRows": "auto auto auto auto",
                    "gridAutoRows": "auto",
                    "justifyContent": "center",
                    "gridGap": "2%",
                    "margin": "2%",
                }}
            >
                {cards}
            </div>
        </div>
    );
}