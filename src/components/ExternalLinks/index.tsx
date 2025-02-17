import React from 'react';
import { Wrapper } from './index.style';
interface Option {
    label: string,
    link: string,
}
const ExternalLinks = () => {
    const options: Option[] = [
        {
            label: "LinkedIn",
            link: "https://linkedin.com/in/jzabala"
        },
        {
            label: "Source Code",
            link: "https://github.com/codejulen/julianz.info"
        },
    ]
    return (
        <Wrapper>
            {options.map((option) => (
                <a href={option.link} target="_blank">
                    {option.label}
                </a>
            ))}
        </Wrapper>
    );
};

export default ExternalLinks