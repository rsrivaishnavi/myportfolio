import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ArchivePage } from "./pages/ArchivePage";
import { useState } from "react";
import Theme from "./utils/Theme";
import GlobalStyle from "./utils/GlobalStyle";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <Theme theme={theme}>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<IndexPage setTheme={setTheme} theme={theme}/>} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
      <Footer/>
    </Theme>
  );
}

export default App;
