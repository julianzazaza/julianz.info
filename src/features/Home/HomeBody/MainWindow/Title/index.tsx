import React, { useState, useEffect } from 'react';
import { StyledTitle, Wrapper } from './index.style';

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
        <Wrapper>
            <StyledTitle>
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{
                            color: `hsl(${hue + index * 20}, 100%, 50%)`,
                            lineHeight: '32px'
                        }}
                    >
                        {char}
                    </span>
                ))}
            </StyledTitle>
        </Wrapper>
    )
}

export default Title;