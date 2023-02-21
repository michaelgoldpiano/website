import React from "react";


interface Props {
    src: string;
}


export default function AudioElement({src}: Props): JSX.Element {
    const extension: string | undefined = src.split(".").pop();
    return (
        <audio controls>
            <source
                src={src}
                type={"audio/" + extension}
            />
            Your browser does not support the audio tag.
        </audio>
    );
}