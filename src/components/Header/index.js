import Logo from "../../assets/logo-chapeu-mario.png";
import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled className="animate__animated animate__backInDown">
      <img
        src={Logo}
        alt="Logo Mario"
        onClick={() => {
          document.location.reload();
        }}
      />

      <nav>
        <ul>
          <li>
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">Detalhes</a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
