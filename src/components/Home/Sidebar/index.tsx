import React from 'react';
import ExternalLinks from './ExternalLinks';
import { Wrapper } from './index.style';

const Sidebar = () => {
    return (<Wrapper>
        <center>RESOLUTION : 1024 x 768 PREFERRED</center>
        <hr />
        <ExternalLinks />
    </Wrapper>);
};
export default Sidebar;