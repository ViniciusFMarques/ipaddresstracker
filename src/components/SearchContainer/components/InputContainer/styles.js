import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 500px;
  max-width: 800px;
  margin-top: 32px;

  @media (max-width: 550px){
    max-width: 80%;
  }
  span{
    font-size: 0.7rem;
    color: white;
    margin-top: 8px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;


  input{
    padding: 24px;
    border-radius: 16px 0 0 16px;
    border: none;
    width: 90%;
    font-size: 1rem;

    &:focus{
      outline: none;
    }
    &::placeholder{
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: 1rem;
    }
  }

  button{
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: none;
    border-radius: 0 16px 16px 0;
    border: none;
    width: 10%;

    &:active{
      background-color: ${({ theme }) => theme.colors.veryDarkGray};
    }

    img{
      width: 8px;
    }
  }
`;
