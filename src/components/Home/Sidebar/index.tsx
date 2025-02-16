import React from 'react';
import ExternalLinks from './ExternalLinks';
import Contact from './Contact';
import { Wrapper } from './index.style';

const Sidebar = () => {
    return (<Wrapper>
        <center>RESOLUTION : 1024 x 768 PREFERRED</center>
        <ExternalLinks />
        <Contact />
    </Wrapper>);
};
export default Sidebar;