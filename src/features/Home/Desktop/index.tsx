import React from 'react';
import Toolbar from 'components/Toolbar';
import MainWindow from './MainWindow';
import KnownIssues from './KnownIssues';
import WorkExperience from './WorkExperience';
import { DesktopWrapper } from './index.style';

const Desktop = () => {
    return (
        <DesktopWrapper>
            <Toolbar />
            <MainWindow />
            <KnownIssues />
            <WorkExperience />
        </DesktopWrapper>)
}

export default Desktop;