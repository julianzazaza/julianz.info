import React from 'react';
import Helmet from './Helmet';
import Sidebar from './Sidebar';
import HomeBody from './HomeBody';
import { Wrapper } from "./index.style";

const Home = () => {
  return (
    <Wrapper>
      <Helmet />
      <Sidebar />
      <HomeBody />
    </Wrapper>
  );
};

export default Home;
