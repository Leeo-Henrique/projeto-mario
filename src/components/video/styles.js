import styled from "styled-components";

export const StyledVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  video {
    height: 100vh;
  }
  ::after {
    content: "";
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
