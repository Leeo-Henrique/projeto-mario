import { StyleVideo } from "./styles";

export const ModalVideo = ({ openModal }) => {
  return (
    <StyleVideo>
      <div className="animate__animated animate__zoomIn">
        <span
          onClick={() => {
            openModal();
          }}
        >
          X
        </span>
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Cb4WV4aXBpk"
          title="Trailer oficial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        >
          #document
        </iframe>
      </div>
    </StyleVideo>
  );
};
