import styled from "styled-components";

export const StyleVideo = styled.div`
  opacity: 1;
  z-index: 100;
  visibility: visible;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20, 0.9);

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    border-radius: 5px;
    gap: 15px;
  }
  div span {
    background-color: #ffffff;
    color: #f03a17;
    font-weight: bold;
    font-size: 20px;
    width: 40px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  div iframe {
    border-width: 0;
    max-width: 640px;
    width: 90%;
    height: 360px;
  }

  @media (max-width: 500px) {
    div iframe {
      width: 300px;
      height: 169px;
    }
    span {
      width: 30px;
      line-height: 30px;
    }
  }

  @media (max-width: 376px) {
    div iframe {
      width: 250px;
      height: 140px;
    }
  }
`;
