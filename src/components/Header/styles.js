import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  max-width: 1440px;
  a img {
    width: 65px;
  }
  nav ul {
    display: flex;
    align-items: center;
    height: 100%;
  }
  nav ul li a {
    font-weight: bold;
    color: #ffffff;
    font-size: 25px;
    padding: 10px 20px;
    border-radius: 50px;
    transition: 0.2s;
  }
  a:hover {
    background-color: #d5011d;
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;
