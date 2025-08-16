import React from 'react';
import Window from 'components/Window';
import logo from 'static/images/logo-BW.png';
import { StyledBody } from './index.style'

const BODY = (<StyledBody>
    <div><img src={logo} alt="logo" width={128} height={128} /></div>
    <>
        <p>I'm Julian - a software engineer based in the San Francisco Bay Area.</p>
        <p>I used to make B2B cybersecurity apps, but now I make B2C mobile stuff.</p>
    </>
</StyledBody>);

const POSITION = {
    top: '5em',
    left: '0.25em',
    zIndex: '1'
}
const MainWindow = () => {


    return (
        <Window titleText='Welcome to my web site' children={BODY} position={POSITION} rainbow />)
}

export default MainWindow;