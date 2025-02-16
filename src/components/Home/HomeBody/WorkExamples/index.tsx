import React from 'react';
import es from './screenshots/es.png';
import mc from './screenshots/mc.png';
import soar from './screenshots/soar.png';
import { Wrapper, StyledImg } from './index.style';

const WorkExamples = () => {
    const ciscoBlurb = "At Cisco, I build beautiful frontend experiences for Splunk BU's Enterprise Security " +
        "- a security information and event management (SIEM) solution.";
    const splunkBlurb = "At Splunk, I built Mission Control, a first-party Splunk app, and Splunk's first " +
        "cloud-based application for case management.";
    const phantomBlurb = "At Phantom, I created test automation frameworks and first party applications for " +
        "their flagship product, Phantom - a security orchestration and automated response (SOAR) platform.";
    return (<>
        <hr />
        <h3>Things I've Worked On</h3>
        <hr />
        <Wrapper>
            <p>{ciscoBlurb}</p><StyledImg src={es} alt="screenshot" />
            <p>{splunkBlurb}</p><StyledImg src={mc} alt="screenshot" />
            <p>{phantomBlurb}</p><StyledImg src={soar} alt="screenshot" />
        </Wrapper >
    </>)
}

export default WorkExamples;