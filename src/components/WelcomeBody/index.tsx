import React from 'react';
import logo from 'static/images/logo-BW.png';
import { StyledBody } from './index.style'

const WelcomeBody = () => {

    return (<StyledBody>
        <div><img src={logo} alt="logo" width={256} height={256} /></div>
        <>
            <p>I'm Julian - a software engineer based in the San Francisco Bay Area. I make cool things at <a href="https://cisco.com">Cisco</a>. Previously, I was building on-prem and cloud apps at <a href="https://splunk.com">Splunk</a>, <a href="https://www.splunk.com/en_us/about-splunk/acquisitions/phantom.html">Phantom</a>, and <a href="https://www.intel.com/content/www/us/en/research/overview.html">Intel Labs</a>.</p>
        </>
    </StyledBody>)
}

export default WelcomeBody;