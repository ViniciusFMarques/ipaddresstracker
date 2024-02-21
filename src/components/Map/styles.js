import styled, { css } from 'styled-components';
import 'leaflet/dist/leaflet.css';

export const Container = styled.div`
  height: 60%;
  background-color: red;
  width: 100%;
  z-index: 0;

  @media (max-width: 650px){
    height: 550px;

    ${({ error }) => error && css`
        height: 300px
      `
}
  }

  .map{
    height: 100%;
  }
`;
