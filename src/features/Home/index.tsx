import React from 'react';
import Helmet from 'components/Helmet';
import HomeBody from './HomeBody';
import KnownIssues from './KnownIssues';
import { Wrapper } from "./index.style";

const Home = () => {
  return (
    <Wrapper>
      <Helmet />
      <HomeBody />
      <KnownIssues />
    </Wrapper>
  );
};

export default Home;
