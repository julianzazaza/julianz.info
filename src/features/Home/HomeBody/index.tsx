import React from 'react';
// import WorkExamples from './WorkExamples';
import Window from 'components/Window';
import Toolbar from 'components/Toolbar';
import { HomeBodyWrapper } from './index.style';
import BodyContent from './Body';

const HomeBody = () => {
    return (
        <HomeBodyWrapper>
            <Toolbar />
            <Window titleText='Welcome to my web site' bodyContent={<BodyContent />} rainbow />
        </HomeBodyWrapper>)
}

export default HomeBody;