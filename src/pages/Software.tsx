import React from "react";
import Keyboard from "../keyboard/Keyboard";


export default function Software(): JSX.Element {
    return (
        <div className="page">
            <div className="card">
                <h1>Keyboard</h1>
                <p>
                    Enjoy this keyboard created using React/TypeScript.
                </p>
                <p>
                    <a href="github.com/michaelgoldpiano/keyboard">Code</a>
                </p>
                <Keyboard />
            </div>
        </div>
    );
}