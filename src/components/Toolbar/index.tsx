import React from 'react';
import { Wrapper, SpanButSpecial } from './index.style';

const Toolbar = () => {
    const timeEvent = new Date();
    return (
        <Wrapper>
            <div>
                <span>🍎</span>
                <span>Links</span>
            </div>
            <SpanButSpecial>{timeEvent.toLocaleTimeString("en-US")}</SpanButSpecial>
        </Wrapper>
    )
}

export default Toolbar;