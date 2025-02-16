import React from 'react';
import Title from './Title';
import Body from './Body';
import CompaniesIveWorkedFor from './CompaniesIveWorkedFor';
import { HomeBodyWrapper } from './index.style';

const HomeBody = () => {


    return (
        <HomeBodyWrapper><Title /><Body /><CompaniesIveWorkedFor /></HomeBodyWrapper>)
}

export default HomeBody;