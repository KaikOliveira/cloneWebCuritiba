import React from 'react';

import Header from '../../components/Header';

import { Wrapper } from './styles'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <h1>Home</h1>
    </Wrapper>
  )
}

export default Home;
