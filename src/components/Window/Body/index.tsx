import React, { FC } from 'react';
import { StyledBody } from './index.style'

interface Props {
    content: React.ReactNode,
}

const Body: FC<Props> = ({ content }) => {

    return (<StyledBody>{content}</StyledBody>)
}

export default Body;