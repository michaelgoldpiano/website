import React from "react";


export enum Orientation {
    LANDSCAPE = 16 / 9,
    PORTRAIT = 9 / 16,
}
interface Props {
    orientation: Orientation;
    src: string;
}


export default function Video({orientation, src}: Props): JSX.Element {
    const extension: string | undefined = src.split(".").pop();
    return (
        <video controls
            style={{
                // objectFit: "cover",
                // width: "100%",
                // height: "100%",
                "aspectRatio": orientation,
            }}
        >
            <source
                src={src}
                type={"video/" + extension}
            />
        </video>
    );
}