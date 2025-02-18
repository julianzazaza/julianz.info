import React, { FC } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
    background-color: #cecefb;
    border-top: 1px solid black;
    border-left: 1px solid black;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 10px;
    // margin: 1px;`
    ;


interface BoxProps {
    minimized: boolean;
}

const Box = styled.div<BoxProps>`
    background-color: ${p => p.minimized ? '#FFFFFF' : '#AAAAAA'};
    border: 1px solid #cecefb;
    // outline: 1px solid #c0c0c0;
    width: 13px;
    height: 13px;
    position: relative;
`;

const InnerBox = styled.div`
    width: 13px;
    height: 13px;
    box-shadow: 1px 1px;
    `;

interface Props {
    onClick: () => void;
    minimized: boolean;
}
const MinMaxButton: FC<Props> = ({ onClick, minimized }) => {
    const handleOnClick = () => {
        onClick();
    }
    return <Outer><Box onClick={handleOnClick} minimized={minimized} ><InnerBox /></Box></Outer>
}

export default MinMaxButton;