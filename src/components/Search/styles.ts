import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';

import backgroundImg from '../../assets/background4.jpg';

interface Props {
  isFocused: boolean;
  isFilled: boolean;
}


export const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Filtro = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

export const Header = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoCity = styled.div`
  width: 20%;
  height: 100%;
  background: ${transparentize(0.1, '#E8E8E8')} ;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;

  > p {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin-right: 15px;
  }

   div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    margin-left: 5px;

     p {
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 2px;
      margin-right: 5px;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 55%;
  height: 80%;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;

   /* background: rgba(255, 255, 255, 0.4); */

  h1 {
    color: #fff;
    margin-right: 42%;
  }
`;

export const InputAndButton = styled.div`
  height: 50px;
  width: 95%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 2.5%;
`;

export const Input = styled.div<Props>`
  background: #fff;
  height: 50px;
  width: 90%;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #333;
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-size: 16px;
  transition: border-color 0.2s;
  &:hover {
    border-color: #0091ea;
  }
  ${(props) => props.isFocused
    && css`
      color: #333;
      border-color: #0091ea;
    `}
  ${(props) => props.isFilled
    && css`
      color: #333;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;
    &::placeholder {
      padding-left: 5px;
      color: #666;
      font-size: 16px;
    }
  }
`;

export const Button = styled.div`
  height: 100%;
  width: 10%;
  background: #0091ea;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#0091ea')} ;
  }
`;

export const Suggestion = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  p {
    background: #ccc;
    padding: 2px;
    color: #333;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;

    &:hover {
      background: #fff;
    }
  }
`;

export const TodosServico = styled.div`
  width: 30%;
  height: 60px;
  margin-top: 45px;
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  cursor: pointer;

  p {
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    background: #0091ea;
  }
`;
