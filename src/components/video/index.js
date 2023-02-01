import video from "../../assets/video-mario.mp4";
import { StyledVideo } from "./styles";
import "animate.css";
export const VideoBackground = () => {
  return (
    <StyledVideo className="animate__animated animate__backInDown">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </StyledVideo>
  );
};
