import React, { FC, useState } from 'react';
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
    collapsed?: boolean,
}

const MainWindow: FC<Props> = ({ titleText, children, rainbow = false, position = DEFAULT_POSITION, collapsed = false }) => {
    const [minimized, setMinimized] = useState(collapsed);

    const handleOnClick = () => {
        setMinimized(!minimized);
    }
    return (
        <Wrapper {...position}>
            <Title text={titleText} rainbow={rainbow} onClick={handleOnClick} />
            <Body children={children} minimized={minimized} />
        </Wrapper>
    );
};
export default MainWindow;