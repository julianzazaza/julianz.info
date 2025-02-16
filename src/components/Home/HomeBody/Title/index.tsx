import React, { useState, useEffect } from 'react';
import { StyledTitle } from './index.style';

const Title = () => {
    const text = 'Welcome to my web site'
    const [hue, setHue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHue((prevHue) => (prevHue + 10) % 360);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <StyledTitle>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    style={{
                        color: `hsl(${hue + index * 20}, 100%, 50%)`,
                    }}
                >
                    {char}
                </span>
            ))}
        </StyledTitle>
    )
}

export default Title;