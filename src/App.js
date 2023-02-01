import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ModalVideo } from "./components/ModalVideo";
import { VideoBackground } from "./components/video";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    return setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <ModalVideo openModal={openModal} />}
      <VideoBackground />
      <Header />
      <Main openModal={openModal}></Main>
    </>
  );
}

export default App;
