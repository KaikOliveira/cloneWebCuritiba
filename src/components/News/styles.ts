import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: navajowhite;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionLeft = styled.div`
  width: 45%;
  height: 90%;
  background: cadetblue;
  margin-right: 1.5%;
`;

export const SectionRight = styled.div`
  width: 45%;
  height: 90%;
  background: crimson;
  margin-left: 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    height: 45%;
    width: 95%;
    background: salmon;
  }
`;
