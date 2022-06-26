import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import Triple from "./pages/Triple";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Triple />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
