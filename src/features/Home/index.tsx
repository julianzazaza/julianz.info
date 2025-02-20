import React from 'react';
import Helmet from 'components/Helmet';
import Desktop from './Desktop';
import { Wrapper } from "./index.style";

const Home = () => {
  return (
    <Wrapper>
      <Helmet />
      <Desktop />
    </Wrapper>
  );
};

export default Home;
