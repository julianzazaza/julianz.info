import React from 'react';
import Helmet from './Helmet';
import {
  HomeTitle,
  HomeBody,
  HomeWrapper,
  HomeGrid,
} from "./index.style";

const Home = () => {
  return (
    <HomeWrapper>
      <Helmet />
      <HomeGrid>
        <HomeTitle>
          I have a web site now
        </HomeTitle>
        <HomeBody>
          <p>I'm Julian - a software engineer based in The SF Bay Area, currently focused on building cool software at <a href="https://cisco.com">Cisco</a>.</p>
          <p>Previously I've built on-prem and cloud apps at <a href="https://splunk.com">Splunk</a>, <a href="https://www.splunk.com/en_us/about-splunk/acquisitions/phantom.html">Phantom</a>, and <a href="https://www.intel.com/content/www/us/en/research/overview.html">Intel Labs</a>.</p>
          <h5>
            <a href="https://www.linkedin.com/in/jzabala/">LinkedIn</a>
          </h5>
          <h5>
            <a href="https://github.com/codejulen">Github</a>
          </h5>
        </HomeBody>
      </HomeGrid>
    </HomeWrapper>
  );
};

export default Home;
