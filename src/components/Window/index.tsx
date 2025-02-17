import React, { FC } from 'react';
import Title from './Title';
import Body from './Body';
import Wrapper from './index.style';

interface Props {
    titleText: string,
    bodyContent: React.ReactNode,
    rainbow?: boolean

}
const MainWindow: FC<Props> = ({ titleText, bodyContent, rainbow = false }) => {
    return (
        <Wrapper>
            <Title text={titleText} rainbow={rainbow} />
            <Body content={bodyContent} />
        </Wrapper>
    )
}
export default MainWindow;