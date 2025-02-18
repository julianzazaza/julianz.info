import React from 'react';
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

const Box = styled.div`
    background-color: #AAAAAA;
    border: 1px solid #cecefb;
    // outline: 1px solid #c0c0c0;
    width: 13px;
    height: 13px;
    position: relative;

`;
const InnerBox = styled.div`
    width: 13px;
    height: 13px;
    box-shadow: 1px 1px;`

const MinMaxButton = () => {
    return <Outer><Box><InnerBox /></Box></Outer>
}

export default MinMaxButton;