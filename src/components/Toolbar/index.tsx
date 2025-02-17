import React from 'react';
import ExternalLinks from 'components/ExternalLinks';
import { Wrapper, SpanButSpecial } from './index.style';

const Toolbar = () => {
    const timeEvent = new Date();
    return (
        <Wrapper>
            <div>
                <span role="img" aria-label="apple emoji">🍎</span>
                <ExternalLinks />
            </div>
            <SpanButSpecial>{timeEvent.toLocaleTimeString("en-US")}</SpanButSpecial>
        </Wrapper>
    )
}

export default Toolbar;