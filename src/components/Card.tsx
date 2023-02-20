import React from "react";


interface Props {
    title: string;
    subtitle: string;
    description: JSX.Element | null;
    media: JSX.Element | null;
}


export default function Card({title, subtitle, description, media}: Props): JSX.Element {
    return (
        <div className="card">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {description}
            {media}
        </div>
    );
}