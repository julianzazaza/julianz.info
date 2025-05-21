import React, { useEffect, useState } from 'react';
import ExternalLinks from 'components/ExternalLinks';
import { Wrapper, SpanButSpecial } from './index.style';

const Toolbar = () => {
    const timeEvent = new Date();
    const [time, setTime] = useState(timeEvent);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Wrapper>
            <div>
                <span role="img" aria-label="apple emoji">🍎</span>
                <ExternalLinks />
            </div>
            <SpanButSpecial>{time.toLocaleTimeString("en-US")}</SpanButSpecial>
        </Wrapper>
    )
}

export default Toolbar;