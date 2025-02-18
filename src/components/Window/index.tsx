import React, { FC } from 'react';
import Title from './Title';
import Body from './Body';
import Wrapper from './index.style';

export interface Position {
    top?: string,
    left?: string,
    bottom?: string,
    right?: string,
    zIndex?: string,
}

const DEFAULT_POSITION: Position = {
    top: '4em',
    left: '1em',
}

interface Props {
    titleText: string,
    children: React.ReactNode,
    rainbow?: boolean,
    position?: Position,
}

const MainWindow: FC<Props> = ({ titleText, children, rainbow = false, position = DEFAULT_POSITION }) => {
    return (
        <Wrapper {...position}>
            <Title text={titleText} rainbow={rainbow} />
            <Body children={children} />
        </Wrapper>
    );
};
export default MainWindow;