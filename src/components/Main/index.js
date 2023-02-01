import { MainStyled } from "./styles";
import Titulo from "../../assets/titulo.png";
import CharsMario from "../../assets/super-mario-chars.png";

export const Main = ({ openModal }) => {
  return (
    <MainStyled className="animate__animated animate__backInDown">
      <div>
        <img src={Titulo} alt="Super Mario Bros" />
        <p>
          Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar
          no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado
          pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os
          lugares.
        </p>
        <button
          onClick={() => {
            openModal();
          }}
        >
          Veja o trailer
        </button>
      </div>
      <img src={CharsMario} alt="personagens Mario" />
    </MainStyled>
  );
};
