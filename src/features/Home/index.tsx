import React from 'react';
import Helmet from 'components/Helmet';
import HomeBody from './HomeBody';
import { Wrapper } from "./index.style";

const Home = () => {
  return (
    <Wrapper>
      <Helmet />
      {/* <Sidebar /> */}
      <HomeBody />
    </Wrapper>
  );
};

export default Home;
