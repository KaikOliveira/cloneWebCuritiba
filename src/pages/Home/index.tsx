import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';

import { Wrapper } from './styles'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />

      <Search />
    </Wrapper>
  )
}

export default Home;
