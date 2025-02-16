import React from 'react';
import CiscoLogo from './logos/CiscoLogo.png';
import SplunkLogo from './logos/SplunkLogo.png';
import PhantomLogo from './logos/PhantomLogo.png';
import IntelLogo from './logos/IntelLogo.png';
import { FlexLogoWrapper, StyledLogo } from './index.style';

const CompaniesIveWorkedFor = () => {

    return (
        <>
            <hr /><center><h3>Companies I've Worked For</h3></center><hr />
            <FlexLogoWrapper>
                <StyledLogo src={CiscoLogo} />
                <StyledLogo src={SplunkLogo} />
                <StyledLogo src={PhantomLogo} />
                <StyledLogo src={IntelLogo} />

            </FlexLogoWrapper>
        </>
    )
}

export default CompaniesIveWorkedFor;