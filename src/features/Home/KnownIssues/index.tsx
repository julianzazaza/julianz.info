import React from 'react';
import Window from 'components/Window';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    margin: 4px;
`

const content = (
    <ContentWrapper>
        1. Time above doesn't update <br />
        2. Dynamic UI nonexistent
    </ContentWrapper>
)

const KnownIssues = () => {
    const titleText = 'Known issues';

    const position = {
        top: '2.5em',
        right: '0.25em'
    }
    return (
        <Window titleText={titleText} children={content} position={position} />)
}

export default KnownIssues;