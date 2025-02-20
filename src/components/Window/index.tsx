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

interface Props {
    titleText: string,
    children: React.ReactNode,
    position: Position,
    rainbow?: boolean,
    collapsed?: boolean,
}

const MainWindow: FC<Props> = ({ titleText, children, rainbow = false, position, collapsed = false }) => {
    const [minimized, setMinimized] = useState(collapsed);

    const handleOnClick = () => {
        setMinimized(!minimized);
    }
    return (
        <Wrapper {...position}>
            <Title text={titleText} rainbow={rainbow} onClick={handleOnClick} minimized={minimized} />
            <Body children={children} minimized={minimized} />
        </Wrapper>
    );
};
export default MainWindow;