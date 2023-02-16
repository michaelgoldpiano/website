import React, { useState, useLayoutEffect } from "react";






export default function Github(): JSX.Element {
    const [size, setSize] = useState<[number, number]>([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => {
            window.removeEventListener("resize", updateSize);
        }
    }, []);



    return <iframe
        width="560"
        height="315"
        src="https://github.com/michaelgoldpiano"
        title="Github"
        // frameborder="0"
        // allow="
        //     accelerometer;
        //     autoplay;
        //     clipboard-write;
        //     encrypted-media;
        //     gyroscope;
        //     picture-in-picture;
        //     web-share"
        // allowfullscreen
    />
}
