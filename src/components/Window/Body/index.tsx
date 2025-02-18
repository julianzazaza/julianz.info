import React, { FC } from 'react';
import { StyledBody } from './index.style'

interface Props {
    minimized: boolean,
    children: React.ReactNode,
}

const Body: FC<Props> = ({ minimized, children }) => {

    return (<StyledBody minimized={minimized}>{children}</StyledBody>)
}

export default Body;