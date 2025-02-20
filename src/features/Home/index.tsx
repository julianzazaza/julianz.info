import React from 'react';
import Helmet from 'components/Helmet';
import Desktop from './Desktop';
import KnownIssues from './KnownIssues';
import { Wrapper } from "./index.style";

const Home = () => {
  return (
    <Wrapper>
      <Helmet />
      <Desktop />
      <KnownIssues />
    </Wrapper>
  );
};

export default Home;
