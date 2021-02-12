import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  background: #E8E8E8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  width: 25%;
  height: 100%;
  font-size: 15px;
  margin-left: 2%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: 333;
`;

export const Nav = styled.div`
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 23%;
`;

export const BoxFirst = styled.div`
  width: 34.3%;
  height: 100%;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const BoxMid = styled.div`
  width: 34.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const BoxEnd = styled.div`
  width: 34.3%;
  height: 100%;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const Acessibilidade = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  border-right: 1px solid #ccc;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  p {
    text-transform: uppercase;
    font-size: 11px;
    margin-left: 5px;
  }
    &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const Tamarana = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  p {
    text-transform: uppercase;
    font-size: 11px;
  }

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const AcessoInfos = styled.div`
  width: 20%;
  height: 100%;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  p {
    text-transform: uppercase;
    font-size: 11px;
  }

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};
    p {
      color: #0091ea;
    }
  }
`;

export const Secretarias = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-right: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.1, '#E8E8E8')};

    p {
      color: #0091ea;
    }
  }

  p {
    text-transform: uppercase;
    font-size: 11px;
    margin-right: 5px;
  }
`;
