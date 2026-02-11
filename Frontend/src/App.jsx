import { useState } from "react";
import IntroVideo from "./components/common/introVideo";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleIntroFinish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 700); // match animation
  };

  return (
    <>
      {/* Main App (Navbar + Home ALWAYS visible behind) */}
      <Home />

      {/* Intro Overlay */}
      {showIntro && (
        <IntroVideo onFinish={handleIntroFinish} fadeOut={fadeOut} />
      )}
    </>
  );
}

export default App;




