import React from 'react';
// import WorkExamples from './WorkExamples';
import Window from 'components/Window';
import Toolbar from 'components/Toolbar';
import { DesktopWrapper } from './index.style';
import WelcomeBody from 'components/WelcomeBody';

const Desktop = () => {
    return (
        <DesktopWrapper>
            <Toolbar />
            <Window titleText='Welcome to my web site' children={<WelcomeBody />} rainbow />
        </DesktopWrapper>)
}

export default Desktop;