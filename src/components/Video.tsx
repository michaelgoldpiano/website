import React from "react";


export enum Orientation {
    LANDSCAPE = 16 / 9,
    PORTRAIT = 9 / 16,
}
interface Props {
    orientation: Orientation;
    src: string;
}


export default function VideoElement({orientation, src}: Props): JSX.Element {
    const extension: string | undefined = src.split(".").pop();
    return (
        <video controls
            style={{
                "aspectRatio": orientation,
            }}
        >
            <source
                src={src}
                type={"video/" + extension}
            />
            Your browser does not support the video tag.
        </video>
    );
}