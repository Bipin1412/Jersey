import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import IntroVideo from "./components/media/IntroVideo";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroVideo onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
