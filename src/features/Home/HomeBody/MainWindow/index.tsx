import React from 'react';
import Body from './Body';
import Title from './Title';
import Wrapper from './index.style';

const MainWindow = () => {
    return (
        <Wrapper>
            <Title />
            <Body />
        </Wrapper>
    )
}
export default MainWindow;