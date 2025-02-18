import React, { FC, useState, useEffect } from 'react';
import { StyledTitle, Wrapper } from './index.style';

interface Props {
    text: string,
    rainbow?: boolean,
}

const Title: FC<Props> = ({ text, rainbow }) => {
    const [hue, setHue] = useState(0);

    useEffect(() => {
        if (rainbow) {
            const intervalId = setInterval(() => {
                setHue((prevHue) => (prevHue + 10) % 360);
            }, 100);

            return () => clearInterval(intervalId);
        }
    }, [rainbow]);

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