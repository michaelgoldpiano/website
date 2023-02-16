import React from "react";


interface Props {
    title: string;
    recordingDate: string;
    description: string;
    media: JSX.Element;
}


export default function Card({title, recordingDate, description, media}: Props): JSX.Element {
    return (
        <div
            style={{
                "display": "grid",
                // "gridColumn": "span 3",
                "gridRow": "auto / span 4",
                // "gridTemplateColumns": "subgrid",
                "gridTemplateRows": "subgrid",
                "gridGap": 0,
                // "gridTemplateColumns": "subgrid",
                // "gridTemplateRows": "subgrid",
                // "width": "80%",
                // "padding": "25px 5%",
                "margin": "2%",
                // "gridGap": "4%",
                "backgroundColor": "#3b3b3e",
            }}
        >
            <h1>{title}</h1>
            <h3>{recordingDate}</h3>
            <p>{description}</p>
            {media}
        </div>
    );
}