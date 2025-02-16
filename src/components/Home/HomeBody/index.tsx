import React from 'react';
import Title from './Title';
import Body from './Body';
// import CompaniesIveWorkedFor from './CompaniesIveWorkedFor';
import WorkExamples from './WorkExamples';
import { HomeBodyWrapper } from './index.style';

const HomeBody = () => {


    return (
        <HomeBodyWrapper>
            <Title />
            <Body />
            {/* <CompaniesIveWorkedFor /> uhh I'll fix this later */}
            <WorkExamples />
        </HomeBodyWrapper>)
}

export default HomeBody;