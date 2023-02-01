import styled from "styled-components";

export const MainStyled = styled.main`
  max-width: 1440px;
  display: flex;
  align-items: center;
  height: calc(100vh - 132px);
  padding: 0 30px 30px;
  div img {
    max-width: 500px;
  }
  div p {
    color: #a8adb7;
    width: 85%;
    font-size: 18px;
    margin: 30px 0;
  }
  div button {
    background-color: #ff0021;
    color: #ffffff;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    transition: 0.5s all ease-in-out;
  }
  div button:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    div img {
      max-width: 75%;
    }
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    gap: 30px;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    img {
      max-width: 50%;
    }
    div button {
      background: #263238;
    }
    div p {
      color: #ffffff;
      text-align: center;
    }
  }
`;
