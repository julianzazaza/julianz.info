import React from 'react';
// import WorkExamples from './WorkExamples';
import MainWindow from 'components/MainWindow';
import { HomeBodyWrapper } from './index.style';
import Toolbar from 'components/Toolbar';

const HomeBody = () => {


    return (
        <HomeBodyWrapper>
            <Toolbar />
            <MainWindow />
            {/* <WorkExamples /> */}
        </HomeBodyWrapper>)
}

export default HomeBody;