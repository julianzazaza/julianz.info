import React from 'react';
import Window from 'components/Window';
import { Wrapper } from './index.style';
import es from './es.png';

const BODY = (
    <Wrapper>
        <p>Despite Splunk being acquired by Cisco in 2024, my day-to-day has remained identical. However, throughout 2024, I've contributed to Splunk Enterprise Security 8.0 - the largest update to Splunk's premiere SIEM.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ff1ufnhUAJU?si=aGfIh9lnisopOXf6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Wrapper>);

const POSITION = {
    top: '7em',
    right: '4em',
    zIndex: '0',
}
const WorkExperience = () => {
    return (
        <Window titleText="Experience: Cisco (1 Year)" children={BODY} position={POSITION} />)
}

export default WorkExperience;