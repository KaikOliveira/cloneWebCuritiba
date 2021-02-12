import React from 'react';
import { IoContrastOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { MdAccessible } from 'react-icons/md';

import {
  Wrapper,
  Title,
  Nav,
  Buttons,
  BoxFirst,
  BoxMid,
  BoxEnd,
  Acessibilidade,
  Tamarana,
  AcessoInfos,
  Secretarias
} from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>Prefeitura Municipal de Tamarana</Title>
      <Nav>
        <Buttons>
          <BoxFirst>
            <IoContrastOutline size={18} color="#333" />
          </BoxFirst>
          <BoxMid>
            <p>A</p>
          </BoxMid>
          <BoxEnd>
            <p>A+</p>
          </BoxEnd>
        </Buttons>

        <Acessibilidade>
          <MdAccessible size={18} color="#333" />
          <p>Acessibilidade</p>
        </Acessibilidade>

        <Tamarana>
          <p>Tamarana-Ouve</p>
        </Tamarana>

        <AcessoInfos>
          <p>Acesso à informação</p>
        </AcessoInfos>

        <Secretarias>
          <p>Secretarias</p>
          <IoIosArrowDown size={18} color="#333" />
        </Secretarias>
      </Nav>
    </Wrapper>
  )
}
export default Header;
