import React, { FC, useState, useEffect } from 'react';
import MinMaxButton from './MinMaxButton';
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
            <MinMaxButton />
            <StyledTitle>
                {rainbow && (
                    text.split('').map((char, index) => (
                        <span
                            key={index}
                            style={{
                                color: `hsl(${hue + index * 20}, 100%, 50%)`,
                            }}
                        >
                            {char}
                        </span>
                    ))
                )}
                {!rainbow && (<span>{text}</span>)}
            </StyledTitle>
        </Wrapper>
    )
}

export default Title;