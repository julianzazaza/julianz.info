import React, { FC } from 'react';
import { StyledBody } from './index.style'

interface Props {
    children: React.ReactNode,
}

const Body: FC<Props> = ({ children }) => {

    return (<StyledBody>{children}</StyledBody>)
}

export default Body;