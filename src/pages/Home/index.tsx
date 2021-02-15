import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import News from '../../components/News';

import { Wrapper } from './styles'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />

      <Search />

      <News />
    </Wrapper>
  )
}

export default Home;
