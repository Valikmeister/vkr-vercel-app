"use client"

import React, { useState, useEffect } from 'react';
import donutFrames from './donutFrames';





const Donut = ({
    scaleX = 0.5,
    scaleY = 0.5,
    fontSize = 9,
    frameInterval = 100,

}) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((currentFrame + 1) % donutFrames.length);
        }, frameInterval);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentFrame]);

    const donutStyle = {
        transform: `scale(${scaleX}, ${scaleY})`,

        fontSize: fontSize
    };

    return (

        <pre className="" style={{
            fontFamily: "Courier New, Courier, monospace",
            whiteSpace: "pre",
            ...donutStyle
        }}>
            {donutFrames[currentFrame]}
        </pre>

    );
};

export default Donut;