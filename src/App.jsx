import "./App.scss";
import { TolgeeProvider } from "@tolgee/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import BlockchainPage from "./components/blockchain-page/blockchain-page";

function App() {
  return (
    <TolgeeProvider
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      defaultLanguage="es-ES"
      loadingFallback={<h1 className="all-center blink_me">Loading…</h1>}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blockchain" element={<BlockchainPage />} />
        </Routes>
      </BrowserRouter>
    </TolgeeProvider>
  );
}

export default App;
