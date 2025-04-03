import React from 'react';
import Toolbar from 'components/Toolbar';
import MainWindow from './MainWindow';
import KnownIssues from './KnownIssues';
import { DesktopWrapper } from './index.style';

const Desktop = () => {
    return (
        <DesktopWrapper>
            <Toolbar />
            <MainWindow />
            <KnownIssues />
        </DesktopWrapper>)
}

export default Desktop;