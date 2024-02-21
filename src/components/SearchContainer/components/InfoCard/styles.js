import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 32px;
  background-color: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 2px 21px 45px -4px rgba(0,0,0,0.21);
  width: 80%;
  max-width: 1000px;
  max-height: 160px;
  z-index: 1;

  ${({ error }) => error && css`
        justify-content: center;
        width: auto;
    `
}

  @media (max-width: 655px){
      flex-direction: column;
      max-height: none;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
    }

`;

export const InfoSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-right: 32px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.darkGray};
    padding-left: 16px;
  }
  h2{
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 8px;
  }
  strong{
    color: ${({ theme }) => theme.colors.veryDarkGray};
    font-weight: 700;
    font-size: 1.3rem;
  }

  span{
    ${({ error }) => error && css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
    `
}}

  ${({ error }) => error && css`
            padding: 0;
      `
}

  @media (max-width: 655px){
    span{
      width: 100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    padding-right: 0px;
    & + &{
      border-left: none;
      padding-left: 0px;
      margin-top: 16px;
    }
  }

  @media (max-width: 780px){
    h2{
      font-size: 0.8rem;
    }
    strong{
      font-size: 1rem;
    }
  }
`;
